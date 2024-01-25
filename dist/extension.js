"use strict";var I=Object.create;var v=Object.defineProperty;var H=Object.getOwnPropertyDescriptor;var D=Object.getOwnPropertyNames;var P=Object.getPrototypeOf,$=Object.prototype.hasOwnProperty;var k=(i,e)=>{for(var t in e)v(i,t,{get:e[t],enumerable:!0})},C=(i,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of D(e))!$.call(i,o)&&o!==t&&v(i,o,{get:()=>e[o],enumerable:!(n=H(e,o))||n.enumerable});return i};var S=(i,e,t)=>(t=i!=null?I(P(i)):{},C(e||!i||!i.__esModule?v(t,"default",{value:i,enumerable:!0}):t,i)),F=i=>C(v({},"__esModule",{value:!0}),i);var E={};k(E,{activate:()=>j,deactivate:()=>O});module.exports=F(E);var s=S(require("vscode")),_=S(require("crypto")),w=require("child_process"),b=process.platform,U=require("path"),W=U.join(__dirname,"python/requirements.txt"),f=class{constructor(e){this._context=e}openDocuments=new Map;openCustomDocument(e,t,n){let o=this.openDocuments.get(e.fsPath);if(o)return o;let a=new y(e);return this.openDocuments.set(e.fsPath,a),a}async setWebviewForDocument(e,t){let n=JSON.stringify({file:e.file,selectedHdu:e.selectedHdu,options:e.options}),o=t.webview.asWebviewUri(s.Uri.joinPath(this._context.extensionUri,"assets/main.js")),a=t.webview.asWebviewUri(s.Uri.joinPath(this._context.extensionUri,"assets/style.css")),p=t.webview.asWebviewUri(s.Uri.joinPath(this._context.extensionUri,"dist/webview.js")),c=t.webview.asWebviewUri(s.Uri.joinPath(this._context.extensionUri,"assets/images/appIcon.png")),m=t.webview.asWebviewUri(s.Uri.joinPath(this._context.extensionUri,"assets/images/KIPAC_stack.png")),u=t.webview.asWebviewUri(s.Uri.joinPath(this._context.extensionUri,"node_modules/vscode/codicons/dist/codicon.css")),g=t.webview.asWebviewUri(s.Uri.joinPath(this._context.extensionUri,"node_modules","vscode/codicons","dist","codicon.ttf")),h=_.randomBytes(16).toString("base64"),r=e.file[`hdu${e.selectedHdu}`].encoded_image,l=`hdu${e.selectedHdu}`,x=`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv=\u201CContent-Security-Policy\u201D content=\u201Cfont-src ${t.webview.cspSource} ${g} vscode-resource: \u2018unsafe-inline\u2019; style-src ${t.webview.cspSource} ${u} vscode-resource: \u2018unsafe-inline\u2019; script-src \u2018self\u2019 \u2018self\u2019 https://*.vscode-cdn.net https://d3js.org https://mpld3.github.io \u2018unsafe-inline\u2019; img-src \u2018self\u2019 \u2018self\u2019 https://*.vscode-cdn.net data:;\u201C>
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Your Custom Editor</title>
            <link href="${a}" rel="stylesheet" type="text/css" >
        </head>
        <body>
            <!-- Header Section -->
            <div id="headerContainer">
                <div id="headerContent">
                    <img src="${c}" alt="App Icon" width="50" height="50">
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
                        ${r?e.file[l].html_plot:""}
                    </div>
                    <!-- Add your image or placeholder here -->
                    <!--  <img id="fits-image" alt="FITS Image" src="" onerror="showPlaceholder()"> -->
                    <h2 id="placeholderText" style="display: none;">No image to display.</h2>
                </div>
            </div>
            <script type="module" src="${p}"></script>
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
                    mainScript.nonce = '${h}';
                    mainScript.src = '${o}';
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
                    <img src="${m}" alt="KIPAC Logo" style="max-width: 80px; height: auto;">
                </div>
            </div>
        </footer>
        </html>`;t.webview.html=x}async resolveCustomEditor(e,t,n){t.webview.options={enableScripts:!0},await e.open(),await this.setWebviewForDocument(e,t),t.webview.onDidReceiveMessage(async o=>{switch(o.command){case"hduSelectorChanged":e.selectedHdu=o.newSelectedHdu,await this.setWebviewForDocument(e,t);break;case"doneLoading":let a=JSON.stringify({file:e.file,selectedHdu:e.selectedHdu,options:e.options});await t.webview.postMessage({command:"updateHeaderInfo",data:a});break;case"colormapChanged":e.options.colormap=o.newColormap,await e.open(),t.webview.postMessage({command:"updateImage",data:JSON.stringify({file:e.file,selectedHdu:e.selectedHdu,options:e.options})});break;case"scaleChanged":e.options.scale=o.newScale,await e.open(),t.webview.postMessage({command:"updateImage",data:JSON.stringify({file:e.file,selectedHdu:e.selectedHdu,options:e.options})});break}},void 0)}saveCustomDocument(e,t){return Promise.resolve()}},y=class{_uri;_file;_options;_selectedHdu;constructor(e){this._uri=e;let t=s.workspace.getConfiguration("fitsimagevoy"),n=t.get("defaultColormap","viridis"),o=t.get("defaultScale","linear");this.options={colormap:n,scale:o}}get uri(){return this._uri}get file(){return this._file}set file(e){this._selectedHdu=e}get options(){return this._options}set options(e){this._options=e}get selectedHdu(){return this._selectedHdu}set selectedHdu(e){this._selectedHdu=e}async open(){this._file=await this.generateImageFromFits(this._uri.fsPath,this._options.colormap,this._options.scale),this._selectedHdu=0;for(let e in this._file)if(this._file[e].encoded_image!==!1){this._selectedHdu=parseInt(e.replace("hdu",""),10);break}}async generateImageFromFits(e,t,n){return new Promise((o,a)=>{let p=s.workspace.getConfiguration("python").get("defaultInterpreterPath"),c="";p===void 0?c=b==="win32"?"python":"python3":c=p;let m="",u=U.join(__dirname,"python","generate_image.py"),g=`
                ${m} > /dev/null 2>&1 &&
                ${c} ${u} "${e}" ${t} ${n}
            `,d=(0,w.spawn)("bash",["-c",g]),h="";d?.stdout&&d?.stderr?(d.stdout.on("data",r=>{h+=r.toString()}),d.stderr.on("data",r=>{console.error(`Python stderr: ${r}`),a(new Error("Failed to generate image from FITS file."))}),d.on("exit",r=>{try{let l=JSON.parse(h);o(l)}catch(l){console.error(`Failed to parse Python script output: ${l}`),a(new Error("Failed to generate image from FITS file."))}})):a(new Error("Failed to start the Python process."))})}dispose(){}};function j(i){let e=s.workspace.getConfiguration("python").get("defaultInterpreterPath"),t="";e===void 0?t=b==="win32"?"python":"python3":t=e;let o=`
         > /dev/null 2>&1 &&
        ${t} -m pip install -r ${W}
    `;(0,w.spawn)("bash",["-c",o]),i.subscriptions.push(s.window.registerCustomEditorProvider("fitsimagevoy.fits",new f(i),{webviewOptions:{retainContextWhenHidden:!0}}))}function O(){}0&&(module.exports={activate,deactivate});
