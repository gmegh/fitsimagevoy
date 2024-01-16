// Description: This is the main file of the extension. 
// It contains the code to activate and deactivate the extension, 
// and to register the custom editor provider.

// Import the relevant modules
import * as vscode from 'vscode';
import * as crypto from 'crypto';
import { ChildProcess, spawn } from 'child_process';
const osvar = process.platform;
const path = require("path");
const requirements = path.join(__dirname, "python/requirements.txt");


// Implement the CustomTextEditorProvider interface
class CustomEditorProvider implements vscode.CustomReadonlyEditorProvider {
    private openDocuments: Map<string, CustomDocument> = new Map();

	constructor(
		private readonly _context: vscode.ExtensionContext
	) { }

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
    async setWebviewForDocument(document: CustomDocument, webviewPanel: vscode.WebviewPanel): Promise<void> {
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

        const scriptPath = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this._context.extensionUri, 'assets/main.js'));
        const stylePath = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this._context.extensionUri, 'assets/style.css'));
        const webviewUri = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this._context.extensionUri, 'dist/webview.js'));
        const appIconUri = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this._context.extensionUri, 'assets/images/appIcon.png'));
        const kipacLogoUri = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this._context.extensionUri, 'assets/images/KIPAC_stack.png'));
        const codiconsUri = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this._context.extensionUri, 'node_modules/vscode/codicons/dist/codicon.css'));
        const codiconsFontUri = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this._context.extensionUri, 'node_modules', 'vscode/codicons', 'dist', 'codicon.ttf'));

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
            <meta http-equiv=“Content-Security-Policy” content=“font-src ${webviewPanel.webview.cspSource} ${codiconsFontUri} vscode-resource: ‘unsafe-inline’; style-src ${webviewPanel.webview.cspSource} ${codiconsUri} vscode-resource: ‘unsafe-inline’; script-src ‘self’ ‘self’ https://*.vscode-cdn.net https://d3js.org https://mpld3.github.io ‘unsafe-inline’; img-src ‘self’ ‘self’ https://*.vscode-cdn.net data:;“>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Your Custom Editor</title>
            <link href="${stylePath}" rel="stylesheet" type="text/css" >
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
            <script src="${scriptPath}"></script>
            <script>
                const vscode = acquireVsCodeApi();
                function adjustScale() {
                    var imageDiv = document.getElementById('mpld3Figure2');
                    var imageSection = document.getElementById('imageSection');
                    var mpld3Figure = document.querySelector('#imageDiv .mpld3-figure');

                    if (mpld3Figure) {
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
                }

                // Adjust the scale on page load and whenever the window is resized
                document.addEventListener('DOMContentLoaded', adjustScale);
            
                window.addEventListener('resize', adjustScale);
            </script>
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
        setTimeout(async () => {
            await webviewPanel.webview.postMessage({ command: 'updateHeaderInfo', data: documentDataJson });
        }, 10);
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
                        await this.setWebviewForDocument(document, webviewPanel);
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

        const configuration = vscode.workspace.getConfiguration('fitsimagevoy');
        const defaultColormap = configuration.get('defaultColormap', 'viridis');
        const defaultScale = configuration.get('defaultScale', 'linear');
        this.options = {
            'colormap': defaultColormap,
            'scale': defaultScale,
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
        /**
         * This function opens the FITS file and stores the data in the _file variable
         * 
         * @returns void
         */
        
        this._file = await this.generateImageFromFits(this._uri.fsPath, this._options['colormap'], this._options['scale']);

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

    async generateImageFromFits(fitsFilePath: string, colormap: string, scale: string): Promise<any> {
        /**
         * This function reads a FITS file and returns the image data, headers and html.
         * It connects with python to run this process.
         * 
         * @param fitsFilePath The path to the FITS file
         * @param colormap The colormap to be used
         * @param scale The scale to be used
         * 
         * @returns A Json string containing the image data, the headers and html.
         */
        return new Promise<any>((resolve, reject) => {

            // Get the Python interpreter path from VSCode settings
            const pythonInterpreterPath: string | undefined = vscode.workspace.getConfiguration('python').get('defaultInterpreterPath');
    
            let command = '';
            if (pythonInterpreterPath === undefined) {
                command = osvar === 'win32' ? 'python' : 'python3';
            } else {
                command = pythonInterpreterPath;
            }
        
            //const activationCommand = 'source /sdf/group/rubin/sw/w_latest/loadLSST.bash';
            const activationCommand = '';
            const pythonScriptPath = path.join(__dirname, 'python', 'generate_image.py');
            const combinedCommand = `
                ${activationCommand} > /dev/null 2>&1 &&
                ${command} ${pythonScriptPath} "${fitsFilePath}" ${colormap} ${scale}
            `;

            // Combine activation and Python commands
            const pythonProcess = spawn('bash', ['-c', combinedCommand]);
            
            let result = '';  // Variable to store the base64-encoded image data
            if (pythonProcess?.stdout && pythonProcess?.stderr) {
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
            } else {
                reject(new Error('Failed to start the Python process.'));
            }
        
        });
    }

	dispose(): void {}
}

// Activate the extension
export function activate(context: vscode.ExtensionContext) {
    const pythonInterpreterPath: string | undefined = vscode.workspace.getConfiguration('python').get('defaultInterpreterPath');
    
    let command = '';
    if (pythonInterpreterPath === undefined) {
        command = osvar === 'win32' ? 'python' : 'python3';
    } else {
        command = pythonInterpreterPath;
    }
    
    //const activationCommand = 'source /sdf/group/rubin/sw/w_latest/loadLSST.bash';
    const activationCommand = '';
    
    const combinedCommand = `
        ${activationCommand} > /dev/null 2>&1 &&
        ${command} -m pip install -r ${requirements}
    `;

    spawn('bash', ['-c', combinedCommand]);

    // Register the custom editor provider
    context.subscriptions.push(
        vscode.window.registerCustomEditorProvider('fitsimagevoy.fits', new CustomEditorProvider(context), 
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