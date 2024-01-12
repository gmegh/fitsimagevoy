// Description: This is the main file of the extension. 
// It contains the code to activate and deactivate the extension, 
// and to register the custom editor provider.

// Import the relevant modules
import * as vscode from 'vscode';
import * as crypto from 'crypto';
import { spawn } from 'child_process';
const osvar = process.platform;
const path = require("path");
const requirements = path.join(__dirname, ".dist/python/requirements.txt");

// Implement the CustomTextEditorProvider interface
class CustomEditorProvider implements vscode.CustomReadonlyEditorProvider {
    private extensionUri: vscode.Uri;
    private openDocuments: Map<string, CustomDocument> = new Map();

    constructor(extensionUri: vscode.Uri) {
        this.extensionUri = extensionUri;
    }

    // Implement the necessary methods (open, resolve, etc.)
    openCustomDocument(uri: vscode.Uri, openContext: vscode.CustomDocumentOpenContext, token: vscode.CancellationToken): vscode.CustomDocument {
        // Check if there are existing webviews for the URI
        let existingDocument = this.openDocuments.get(uri.fsPath);
        if (existingDocument) {
            // Dispose the existing document if needed
            return existingDocument;
        }

        // Create a new CustomDocument instance for the URI
        const newDocument = new CustomDocument(uri);
        this.openDocuments.set(uri.fsPath, newDocument);

        return newDocument;
    }

    // Implement the necessary methods (open, resolve, etc.)
    setWebviewForDocument(document: CustomDocument, webviewPanel: vscode.WebviewPanel): void {
        /**
         * This function updates the webview panel with the new document
         * 
         * @param document The document to be displayed in the webview
         * @param webviewPanel The webview panel to be updated
         * 
         * @returns void
         */

        // Send a message to the webview to update the header info
        const documentDataJson = JSON.stringify({
            file: document.file,
            selectedHdu: document.selectedHdu,
            options: document.options,
        });

        // Get the path to the script and style files
        const scriptPath = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this.extensionUri, 'src/main.js'));
        const stylePath = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this.extensionUri, 'src/style.css'));
        const webviewUri = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this.extensionUri, 'dist/webview.js'));
        const appIconUri = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this.extensionUri, 'assets/appIcon.png'));
        const kipacLogoUri = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this.extensionUri, 'assets/KIPAC_stack.png'));
        const codiconsUri = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this.extensionUri, 'node_modules', '@vscode/codicons', 'dist', 'codicon.css'));
        const mpld3Uri = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this.extensionUri, 'node_modules', 'mpld3', 'dist', 'mpld3.v0.5.10.min.js'));
        
        // Generate a nonce to add to the script element
        const randomBytes = crypto.randomBytes(16);
        const nonce = randomBytes.toString('base64');

        // Check if the selected HDU is an image
        const isImage = document.file[`hdu${document.selectedHdu}`].encoded_image;
        const selected = `hdu${document.selectedHdu}`;

        const new_html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Your Custom Editor</title>
            <link rel="stylesheet" type="text/css" href="${stylePath}">
            <link href="${codiconsUri}" rel="stylesheet" />
        </head>
        <body>
            <!-- Header Section -->
            <div id="headerContainer">
                <div id="headerContent">
                    <img src="${appIconUri}" alt="App Icon" width="50" height="50">
                    <div>
                        <h2>FitsImageVOY</h2>
                        <p>From DS9 to VOY, dedicated to all Rubin Observatory scientists</p>
                    </div>
                </div>
            </div>
        
            <!-- Main Container -->
            <div id="container">
                <!-- Header Selector and Headers Container -->
                <div id="headerInfoContainer">
                    <div id="optionsSection">
                        <h2>Selectable options</h2>


                        <div id="hduListContainer" class="dropdown-container">
                            <label for="hduSelector">Select HDU:</label>
                            <vscode-dropdown id="hduSelector"></vscode-dropdown>
                            <vscode-data-grid id="basic-grid" aria-label="Basic"></vscode-data-grid>
                        </div>

                        <vscode-divider role="presentation"></vscode-divider>

                        <vscode-radio-group id="colorSelector"></vscode-radio-group>

                        <vscode-divider role="presentation"></vscode-divider>

                        <vscode-radio-group id="scaleSelector"></vscode-radio-group>

                    </div>
        
                    <!-- Header Info Section -->
                    <div id="headerInfoSection">
                        <div id="headerInfoHeader">
                            <h2>Header Information</h2>
                            <vscode-text-field placeholder="Search" id="input">
                                <span slot="start" appearance="icon" class="codicon codicon-search"></span>
                            </vscode-text-field>
                        </div>
                        <div id="headerInfo"></div>
                    </div>
                </div>
        
                <vscode-divider role="presentation"></vscode-divider>
                
                <!-- Image Section -->
                <div id="imageSection">
                    <div id="imageDiv" class="responsive-plot">
                        ${isImage ? document.file[selected].html_plot : ''}
                    </div>
                    <!-- Add your image or placeholder here -->
                    <!--  <img id="fits-image" alt="FITS Image" src="" onerror="showPlaceholder()"> -->
                    <h2 id="placeholderText" style="display: none;">No image to display.</h2>
                </div>
            </div>
            <script type="module" src="${webviewUri}"></script>
            <script type="module">
                import * as mpld3 from '${mpld3Uri}';
            </script>
            <script>
                const vscode = acquireVsCodeApi();
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

                // Adjust the scale on page load and whenever the window is resized
                document.addEventListener('DOMContentLoaded', adjustScale);
            
                window.addEventListener('resize', adjustScale);
            </script>
            <script nonce="${nonce}" src="${scriptPath}"></script>
        </body>
        <footer>
            <div id="footerContainer">
                <div id="footerText">
                    <p>Designed by <a href="https://github.com/gmegh/" target="_blank">@gmegh</a></p>
                    <p>at KIPAC, Stanford University</p>
                </div>
                
                <div id="kipacLogo">
                    <!-- Replace 'path_to_your_logo.png' with the actual path to your KIPAC logo -->
                    <img src="${kipacLogoUri}" alt="KIPAC Logo" style="max-width: 80px; height: auto;">
                </div>
            </div>
        </footer>
        </html>`;
        webviewPanel.webview.html = new_html;
        webviewPanel.webview.postMessage({ command: 'updateHeaderInfo', data: documentDataJson });
    }

    async resolveCustomEditor(
        document: CustomDocument,
        webviewPanel: vscode.WebviewPanel,
        _token: vscode.CancellationToken
    ): Promise<void> {
        /**
         * This function resolves the webview panel with the new document
         * 
         * @param document The document to be displayed in the webview
         * @param webviewPanel The webview panel to be updated
         * @param _token The cancellation token
         * 
         * @returns void
         */
        
        // Setup initial content for the webview
        webviewPanel.webview.options = {
            enableScripts: true,
        };
    
        // Call the open method to load the header
        await document.open();

        // Set the webview for the document
        await this.setWebviewForDocument(document, webviewPanel);

        // Handle messages from the webview
        webviewPanel.webview.onDidReceiveMessage(
            async message => {
                switch (message.command) {
                    // Handle hdu selected change
                    case 'hduSelectorChanged':
                        document.selectedHdu = message.newSelectedHdu;
                        this.setWebviewForDocument(document, webviewPanel);
                        break;
                    // Handle colormap change
                    case 'colormapChanged':
                        document.options.colormap = message.newColormap;

                        await document.open();

                        webviewPanel.webview.postMessage({ 
                            command: 'updateImage', 
                            data: JSON.stringify({
                                file: document.file,
                                selectedHdu: document.selectedHdu,
                                options: document.options,
                            })
                        });
                        break;
                    // Handle scale change
                    case 'scaleChanged':
                        document.options.scale = message.newScale;

                        await document.open();

                        webviewPanel.webview.postMessage({ 
                            command: 'updateImage', 
                            data: JSON.stringify({
                                file: document.file,
                                selectedHdu: document.selectedHdu,
                                options: document.options,
                            })
                        });
                        break;
                }
            },
            undefined,
        );
    }

    saveCustomDocument(document: vscode.CustomDocument, cancellation: vscode.CancellationToken): Thenable<void> {
        // Implement the logic to save the custom document
        return Promise.resolve();
    }
}


class CustomDocument implements vscode.CustomDocument {
    // Implement the necessary methods and properties for your custom document
    private _uri: vscode.Uri;
    private _file: any;  // Replace with the actual type of your header
    private _options: any;
    private _selectedHdu: any;  // Replace with the actual type of your header

    constructor(uri: vscode.Uri) {
        this._uri = uri;
        this.options = {
            'colormap': 'viridis',
            'scale': 'linear',
        }; 
    }
    get uri(): vscode.Uri {
        return this._uri;
    }

    get file(): any {
        return this._file;
    }

    set file(value: any) {
        this._selectedHdu = value;
    }

    get options(): any {
        return this._options;
    }

    set options(value: any) {
        this._options = value;
    }

    get selectedHdu(): any {
        return this._selectedHdu;
    }

    set selectedHdu(value: any) {
        this._selectedHdu = value;
    }

    // Implement the open method to load the header
    async open(): Promise<void> {
        this._file = await this.generateImageFromFits(this._uri.fsPath, JSON.stringify(this._options));

        // Initialize a variable to store the selected element
        this._selectedHdu = 0;

        // Iterate over the elements and find the first one with encoded_image not equal to none
        for (const key in this._file) {
            const element = this._file[key];

            if (element['encoded_image'] !== false) {
                this._selectedHdu = parseInt(key.replace('hdu', ''), 10);
                break;
            }
        }
    }

    async generateImageFromFits(fitsFilePath: string, options: string): Promise<any> {
        /**
         * This function reads a FITS file and returns the image data, headers and html.
         * It connects with python to run this process.
         * 
         * @param fitsFilePath The path to the FITS file
         * @param options The options to be passed to the Python script
         * 
         * @returns A Json string containing the image data, the headers and html.
         */
        return new Promise<any>((resolve, reject) => {
            const pythonScriptPath = path.join(__dirname, 'python', 'generate_image.py');
            
            const pythonProcess = spawn('python', [pythonScriptPath, fitsFilePath, options]);

            let result = '';  // Variable to store the base64-encoded image data

            pythonProcess.stdout.on('data', (data) => {
                // Handle data received from the Python script
                result += data.toString();
            });
            
            pythonProcess.stderr.on('data', (data) => {
                // Handle errors or messages from the Python script
                console.error(`Python stderr: ${data}`);
                reject(new Error(`Failed to generate image from FITS file.`));
            });
            
            pythonProcess.on('exit', (code) => {
                try {
                    const output = JSON.parse(result);
                    resolve(output);
                } catch (error) {
                    console.error(`Failed to parse Python script output: ${error}`);
                    reject(new Error(`Failed to generate image from FITS file.`));
                }
            });
        });
    }

	dispose(): void {}
}

// Activate the extension
export function activate(context: vscode.ExtensionContext) {
    // Install the Python dependencies
    if (osvar === "win32") {
        spawn("python", ["-m", "pip", "install", "-r", requirements]);
      } else {
        spawn("python3", ["-m", "pip3", "install", "-r", requirements]);
      }

    // Register the custom editor provider
    context.subscriptions.push(
        vscode.window.registerCustomEditorProvider('fitsimagevoy.fits', new CustomEditorProvider(context.extensionUri), 
        {
            webviewOptions: {
				retainContextWhenHidden: true,
			},
        })
    );
}

// Deactivate the extension
export function deactivate() {
    // Clean up resources when the extension is deactivated
}