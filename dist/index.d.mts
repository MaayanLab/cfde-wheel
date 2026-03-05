import * as react_jsx_runtime from 'react/jsx-runtime';

interface dccType {
    id: string;
    label: string;
    homepage: string;
    icon: string;
    description?: string;
}
declare const CFDEWheel: ({ button, new_window }: {
    button?: boolean;
    new_window?: boolean;
}) => react_jsx_runtime.JSX.Element;

export { type dccType, CFDEWheel as default };
