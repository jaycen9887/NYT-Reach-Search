import React from 'react';

export const Url = (props, {children}) => {
    return (
    <a href={props}>
        {children}
    </a>
    );
}

export default Url;