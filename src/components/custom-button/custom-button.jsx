import React from 'react';
import './custom-button.scss';
const CustomButton = ({children,otherClasses,...otherProps}) => {
    return ( 
        <button className={`custom-button ${otherClasses}`} {...otherProps} >
            {children}
        </button>
     );
}
 
export default CustomButton;