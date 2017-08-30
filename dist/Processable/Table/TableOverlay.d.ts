import * as React from 'react';
import { IMUIProps } from '@process-engine-js/frontend_mui/dist/interfaces';
export interface ITableOverlayProps extends IMUIProps {
    menuSchema: Array<any>;
    onMenuItemClicked: Function;
    tableOverlayStyles: any;
    title?: string;
    infoText?: string;
    primary?: boolean;
    isCheckBox?: boolean;
    menuItemClassName?: string;
    checkBoxTheme?: {};
    linkTheme?: {};
    onSelectedMenuItemsChange?: Function;
}
export interface ITableOverlayState {
    selectedMenuItems?: {};
}
export interface ITableOverlayChildContext {
    muiTheme?: {};
}
declare class TableOverlay extends React.Component<ITableOverlayProps, ITableOverlayState> {
    static defaultProps: {
        theme: any;
        muiProps: {};
        qflProps: {};
        title: any;
        infoText: any;
        primary: boolean;
        isCheckBox: boolean;
        menuItemClassName: any;
        checkBoxTheme: any;
        linkTheme: any;
        onSelectedMenuItemsChange: any;
    };
    constructor();
    private handleChange(e, oldValue, newValue, dataKey);
    private handleItemMenuClicked(e, dataKey);
    render(): JSX.Element;
}
export default TableOverlay;