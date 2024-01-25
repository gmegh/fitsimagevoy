"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/extension.ts
var extension_exports = {};
__export(extension_exports, {
  activate: () => activate,
  deactivate: () => deactivate
});
module.exports = __toCommonJS(extension_exports);
var vscode = __toESM(require("vscode"));
var crypto = __toESM(require("crypto"));
var import_child_process = require("child_process");
var osvar = process.platform;
var path = require("path");
var requirements = path.join(__dirname, "python/requirements.txt");
var CustomEditorProvider = class {
  constructor(_context) {
    this._context = _context;
  }
  openDocuments = /* @__PURE__ */ new Map();
  // Implement the necessary methods (open, resolve, etc.)
  openCustomDocument(uri, openContext, token) {
    let existingDocument = this.openDocuments.get(uri.fsPath);
    if (existingDocument) {
      return existingDocument;
    }
    const newDocument = new CustomDocument(uri);
    this.openDocuments.set(uri.fsPath, newDocument);
    return newDocument;
  }
  // Implement the necessary methods (open, resolve, etc.)
  async setWebviewForDocument(document, webviewPanel) {
    const documentDataJson = JSON.stringify({
      file: document.file,
      selectedHdu: document.selectedHdu,
      options: document.options
    });
    const scriptPath = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this._context.extensionUri, "assets/main.js"));
    const stylePath = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this._context.extensionUri, "assets/style.css"));
    const webviewUri = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this._context.extensionUri, "dist/webview.js"));
    const appIconUri = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this._context.extensionUri, "assets/images/appIcon.png"));
    const kipacLogoUri = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this._context.extensionUri, "assets/images/KIPAC_stack.png"));
    const codiconsUri = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this._context.extensionUri, "node_modules/vscode/codicons/dist/codicon.css"));
    const codiconsFontUri = webviewPanel.webview.asWebviewUri(vscode.Uri.joinPath(this._context.extensionUri, "node_modules", "vscode/codicons", "dist", "codicon.ttf"));
    const randomBytes2 = crypto.randomBytes(16);
    const nonce = randomBytes2.toString("base64");
    const isImage = document.file[`hdu${document.selectedHdu}`].encoded_image;
    const selected = `hdu${document.selectedHdu}`;
    const new_html = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv=\u201CContent-Security-Policy\u201D content=\u201Cfont-src ${webviewPanel.webview.cspSource} ${codiconsFontUri} vscode-resource: \u2018unsafe-inline\u2019; style-src ${webviewPanel.webview.cspSource} ${codiconsUri} vscode-resource: \u2018unsafe-inline\u2019; script-src \u2018self\u2019 \u2018self\u2019 https://*.vscode-cdn.net https://d3js.org https://mpld3.github.io \u2018unsafe-inline\u2019; img-src \u2018self\u2019 \u2018self\u2019 https://*.vscode-cdn.net data:;\u201C>
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
                        ${isImage ? document.file[selected].html_plot : ""}
                    </div>
                    <!-- Add your image or placeholder here -->
                    <!--  <img id="fits-image" alt="FITS Image" src="" onerror="showPlaceholder()"> -->
                    <h2 id="placeholderText" style="display: none;">No image to display.</h2>
                </div>
            </div>
            <script type="module" src="${webviewUri}"></script>
            <script>
                const vscode = acquireVsCodeApi();

                // Update the color value in the options
                function updateColor(event) {
                    // Post a message to VS Code
                    vscode.postMessage({
                        command: 'colormapChanged',
                        newColormap: event
                    });
                }

                // Update the scale value in the options
                function updateScale(event) {
                    // Post a message to VS Code
                    vscode.postMessage({
                        command: 'scaleChanged',
                        newScale: event
                    });
                }

                // Adjust the scale on page load and whenever the window is resized
                document.addEventListener('DOMContentLoaded',  () => {
                    // Dynamically create a script element for main.js
                    const mainScript = document.createElement('script');
                    mainScript.type = 'module';
                    mainScript.nonce = '${nonce}';
                    mainScript.src = '${scriptPath}';
                    // Append the script element to the document
                    document.body.appendChild(mainScript);

                    // Post a message to VS Code
                    vscode.postMessage({
                        command: 'doneLoading'
                    });
                });
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
  }
  async resolveCustomEditor(document, webviewPanel, _token) {
    webviewPanel.webview.options = {
      enableScripts: true
    };
    await document.open();
    await this.setWebviewForDocument(document, webviewPanel);
    webviewPanel.webview.onDidReceiveMessage(
      async (message) => {
        switch (message.command) {
          case "hduSelectorChanged":
            document.selectedHdu = message.newSelectedHdu;
            await this.setWebviewForDocument(document, webviewPanel);
            break;
          case "doneLoading":
            const documentDataJson = JSON.stringify({
              file: document.file,
              selectedHdu: document.selectedHdu,
              options: document.options
            });
            await webviewPanel.webview.postMessage({
              command: "updateHeaderInfo",
              data: documentDataJson
            });
            break;
          case "colormapChanged":
            document.options.colormap = message.newColormap;
            await document.open();
            webviewPanel.webview.postMessage({
              command: "updateImage",
              data: JSON.stringify({
                file: document.file,
                selectedHdu: document.selectedHdu,
                options: document.options
              })
            });
            break;
          case "scaleChanged":
            document.options.scale = message.newScale;
            await document.open();
            webviewPanel.webview.postMessage({
              command: "updateImage",
              data: JSON.stringify({
                file: document.file,
                selectedHdu: document.selectedHdu,
                options: document.options
              })
            });
            break;
        }
      },
      void 0
    );
  }
  saveCustomDocument(document, cancellation) {
    return Promise.resolve();
  }
};
var CustomDocument = class {
  // Implement the necessary methods and properties for your custom document
  _uri;
  _file;
  // Replace with the actual type of your header
  _options;
  _selectedHdu;
  // Replace with the actual type of your header
  constructor(uri) {
    this._uri = uri;
    const configuration = vscode.workspace.getConfiguration("fitsimagevoy");
    const defaultColormap = configuration.get("defaultColormap", "viridis");
    const defaultScale = configuration.get("defaultScale", "linear");
    this.options = {
      "colormap": defaultColormap,
      "scale": defaultScale
    };
  }
  get uri() {
    return this._uri;
  }
  get file() {
    return this._file;
  }
  set file(value) {
    this._selectedHdu = value;
  }
  get options() {
    return this._options;
  }
  set options(value) {
    this._options = value;
  }
  get selectedHdu() {
    return this._selectedHdu;
  }
  set selectedHdu(value) {
    this._selectedHdu = value;
  }
  // Implement the open method to load the header
  async open() {
    this._file = await this.generateImageFromFits(this._uri.fsPath, this._options["colormap"], this._options["scale"]);
    this._selectedHdu = 0;
    for (const key in this._file) {
      const element = this._file[key];
      if (element["encoded_image"] !== false) {
        this._selectedHdu = parseInt(key.replace("hdu", ""), 10);
        break;
      }
    }
  }
  async generateImageFromFits(fitsFilePath, colormap, scale) {
    return new Promise((resolve, reject) => {
      const pythonInterpreterPath = vscode.workspace.getConfiguration("python").get("defaultInterpreterPath");
      let command = "";
      if (pythonInterpreterPath === void 0) {
        command = osvar === "win32" ? "python" : "python3";
      } else {
        command = pythonInterpreterPath;
      }
      const activationCommand = "";
      const pythonScriptPath = path.join(__dirname, "python", "generate_image.py");
      const combinedCommand = `
                ${activationCommand} > /dev/null 2>&1 &&
                ${command} ${pythonScriptPath} "${fitsFilePath}" ${colormap} ${scale}
            `;
      const pythonProcess = (0, import_child_process.spawn)("bash", ["-c", combinedCommand]);
      let result = "";
      if (pythonProcess?.stdout && pythonProcess?.stderr) {
        pythonProcess.stdout.on("data", (data) => {
          result += data.toString();
        });
        pythonProcess.stderr.on("data", (data) => {
          console.error(`Python stderr: ${data}`);
          reject(new Error(`Failed to generate image from FITS file.`));
        });
        pythonProcess.on("exit", (code) => {
          try {
            const output = JSON.parse(result);
            resolve(output);
          } catch (error) {
            console.error(`Failed to parse Python script output: ${error}`);
            reject(new Error(`Failed to generate image from FITS file.`));
          }
        });
      } else {
        reject(new Error("Failed to start the Python process."));
      }
    });
  }
  dispose() {
  }
};
function activate(context) {
  const pythonInterpreterPath = vscode.workspace.getConfiguration("python").get("defaultInterpreterPath");
  let command = "";
  if (pythonInterpreterPath === void 0) {
    command = osvar === "win32" ? "python" : "python3";
  } else {
    command = pythonInterpreterPath;
  }
  const activationCommand = "";
  const combinedCommand = `
        ${activationCommand} > /dev/null 2>&1 &&
        ${command} -m pip install -r ${requirements}
    `;
  (0, import_child_process.spawn)("bash", ["-c", combinedCommand]);
  context.subscriptions.push(
    vscode.window.registerCustomEditorProvider(
      "fitsimagevoy.fits",
      new CustomEditorProvider(context),
      {
        webviewOptions: {
          retainContextWhenHidden: true
        }
      }
    )
  );
}
function deactivate() {
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  activate,
  deactivate
});
//# sourceMappingURL=extension.js.map
