// Here all the VSCode components imported from the webview-ui-toolkit are registered
import { 
    provideVSCodeDesignSystem, 
    vsCodeButton, 
    vsCodeDropdown, 
    vsCodeOption, 
    vsCodeDivider,
    vsCodeDataGrid, 
    vsCodeDataGridRow, 
    vsCodeDataGridCell,
    vsCodeTextField,
    vsCodeRadioGroup,
    vsCodeRadio,
} from "@vscode/webview-ui-toolkit";

provideVSCodeDesignSystem().register(
    vsCodeButton(),
    vsCodeDropdown(),
    vsCodeOption(),
    vsCodeDivider(),
    vsCodeDataGrid(),
    vsCodeDataGridRow(),
    vsCodeDataGridCell(),
    vsCodeTextField(),
    vsCodeRadioGroup(),
    vsCodeRadio(),
);
  