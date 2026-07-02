import * as react_jsx_runtime from 'react/jsx-runtime';

declare function InteractiveNavComponent({ dccs, new_window }: {
    dccs: Array<any>;
    new_window?: boolean;
}): react_jsx_runtime.JSX.Element;

declare function InteractiveModal({ dccs, handleClose, new_window }: {
    dccs: Array<any>;
    handleClose: any;
    new_window?: boolean;
}): react_jsx_runtime.JSX.Element;

declare const CFDEWheel: ({ button, new_window }: {
    button?: boolean;
    new_window?: boolean;
}) => react_jsx_runtime.JSX.Element;

export { CFDEWheel, InteractiveModal, InteractiveNavComponent, CFDEWheel as default };
