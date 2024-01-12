// Function to update the header info with the received data

async function updateHeaderInfo(data) {
    const headerInfoElement = document.getElementById('headerInfo');
    const hduSelector = document.getElementById('hduSelector');
    const colorSelector = document.getElementById('colorSelector');
    const scaleSelector = document.getElementById('scaleSelector');
    const searchInput = document.getElementById('input');

    const { file, selectedHdu, options } = JSON.parse(data);

    // Update the HDU list and select the specified HDU
    hduSelector.innerHTML = Object.keys(file).map((element, index) => {
        const isSelected = index === selectedHdu;
        return `<vscode-option value="${index}" ${isSelected ? 'selected' : ''} >HDU ${index}</vscode-option>`;
    }).join('');

    // Listen for change event on hduSelector
    hduSelector.addEventListener('change', function() {
        const newSelectedHdu = parseInt(this.value, 10); // Parse to integer
        // Post a message to VS Code
        vscode.postMessage({
            command: 'hduSelectorChanged',
            newSelectedHdu: newSelectedHdu
        });
    });

    const colormapOptions = ['viridis', 'gray', 'rainbow', 'hot', 'jet', 'aips0'].map((color) => {
        const isSelected = color === options.colormap;
        return `<vscode-radio value="${color}" ${isSelected ? 'checked' : ''} onclick="updateVariable('${color}')">${color}</vscode-radio>`;
    }).join('');
    colorSelector.innerHTML = `<label slot="label">Colormap</label>${colormapOptions}`;


    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };
      
    const scaleOptions = ['linear', 'logarithmic', 'power', 'sqrt',  'squared'].map((value) => {
        const label = capitalizeFirstLetter(value);
        const isSelected = value === options.scale;
        return `<vscode-radio value="${value}" ${isSelected ? 'checked' : ''} onclick="updateScale('${value}')">${label}</vscode-radio>`;
    }).join('');
    scaleSelector.innerHTML = `<label slot="label">Scale</label>${scaleOptions}`;
    
    // Add an event listener to the search input
    searchInput.addEventListener('input', function() {
        handleSearch(searchInput);
    });

    // Display header keys and values in a table for the selected HDU
    const selectedHeader = file[`hdu${selectedHdu}`].header;
    const tableHtml = `
        <vscode-data-grid>
            <vscode-data-grid-row row-type="sticky-header">
                <vscode-data-grid-cell cell-type="columnheader" grid-column="1">Key</vscode-data-grid-cell>
                <vscode-data-grid-cell cell-type="columnheader" grid-column="2">Value</vscode-data-grid-cell>
            </vscode-data-grid-row>
            ${Object.entries(selectedHeader)
                .filter(([key]) => key !== 'END')
                .map(([key, value]) => `
                <vscode-data-grid-row>
                    <vscode-data-grid-cell grid-column="1" style="font-weight: semi-bold;">${key}</vscode-data-grid-cell>
                    <vscode-data-grid-cell grid-column="2">${value}</vscode-data-grid-cell>
                </vscode-data-grid-row>
            `).join('')}
        </vscode-data-grid>
    `;
    headerInfoElement.innerHTML = tableHtml;

    // Create a data URL
    if (file[`hdu${selectedHdu}`].encoded_image) {
        document.getElementById('imageDiv').style.display = 'block';
        document.getElementById('placeholderText').style.display = 'none';
    } else {
        document.getElementById('imageDiv').style.display = 'none';
        document.getElementById('placeholderText').style.display = 'block';
    }
    
    // Set the data URL as the source for an <img> tag
    //const dataUrl = `data:image/png;base64,${file[`hdu${selectedHdu}`].encoded_image}`;
    //imgElement.src = dataUrl;
}




// Get all radio buttons within the radio group
function updateVariable(event) {
    // Post a message to VS Code
    vscode.postMessage({
        command: 'colormapChanged',
        newColormap: event
    });
}

// Get all radio buttons within the radio group
function updateScale(event) {
    // Post a message to VS Code
    vscode.postMessage({
        command: 'scaleChanged',
        newScale: event
    });
}

function adjustScale() {
    var imageDiv = document.getElementById('mpld3Figure2');
    var imageSection = document.getElementById('imageSection');
    var mpld3Figure = document.querySelector('#imageDiv .mpld3-figure');
    var bbox = mpld3Figure.getBBox();
    var aspectRatioWidth = (imageSection.clientWidth - 20) / bbox.width ;
    var aspectRatioHeight = (imageSection.clientHeight - 20) / bbox.height ;
    var aspectRatio = Math.min(aspectRatioWidth, aspectRatioHeight);

    // Apply the scaling transformation
    imageDiv.style.transform = 'scale(' + aspectRatio + ')';
    imageDiv.style.transformOrigin = 'top center';

    var svgElement = document.querySelector('.mpld3-toolbar');

    // Change the y property to a new value, for example, 200
    svgElement.setAttribute('y', '20');
    svgElement.setAttribute('x', 20*bbox.width / bbox.height);
}

// Listen for messages from the webview
window.addEventListener('message', async event => {
    const message = event.data;

    if (message.command === 'updateHeaderInfo') {
        await updateHeaderInfo(message.data);
        await adjustScale();
    }

    if (message.command === 'updateImage') {
        await updateImageContent(message.data);
        await adjustScale();
    }
});

function generateNonce() {
    const randomBytes = new Uint8Array(16);
    crypto.getRandomValues(randomBytes);
    const nonce = Array.from(randomBytes)
      .map(byte => byte.toString(16).padStart(2, '0'))
      .join('');
    return nonce;
  }
  

function updateImageContent(data) {
    const imageDiv = document.getElementById('imageDiv');
    const { file, selectedHdu, _ } = JSON.parse(data);
    if (imageDiv) {

        imageDiv.innerHTML = file[`hdu${selectedHdu}`]['html_plot'];
        const currentScripts2 = Array.from(imageDiv.querySelectorAll('script'));

        // Re-execute scripts
        currentScripts2.forEach(script => {
            const newScript = document.createElement('script');
            newScript.textContent = script.textContent;
            newScript.setAttribute('nonce', generateNonce());
            document.body.appendChild(newScript);
        });

        adjustScale();
    }
}

// Define the handleSearch function
function handleSearch(searchInput) {
    const searchValue = searchInput.value.toLowerCase();

    // Select all rows in the table
    const rows = container.querySelectorAll('vscode-data-grid-row');

    // Filter only the rows that don't have the class .column-header
    const dataRows = Array.from(rows).filter(row => !row.classList.contains('sticky-header'));

    // Loop through each row and check if the key or value contains the search text
    dataRows.forEach(row => {
        const keyCell = row.querySelector('vscode-data-grid-cell[grid-column="1"]');
        const valueCell = row.querySelector('vscode-data-grid-cell[grid-column="2"]');

        if (keyCell.textContent.toLowerCase().includes(searchValue) || valueCell.textContent.toLowerCase().includes(searchValue)) {
            // If the key or value contains the search text, display the row
            row.style.display = '';
        } else {
            // Otherwise, hide the row
            row.style.display = 'none';
        }
    });
}