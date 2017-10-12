import React from 'react';

export const Div = (props, {children}) => {
    return (
    <div {...props}>
        {children}
    </div>
    );
}

export default Div;