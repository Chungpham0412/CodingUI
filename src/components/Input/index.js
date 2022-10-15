// import { useState } from 'react';
import React from 'react';
function Input(props) {
    const { type = 'text', className = '', ...rest } = props;
    // const [inputType, setInputType] = useState(type);
    // togglePassword() {
    //     setInputType(inputType === "password" ? "text" : "password");
    //   }
    return (
        <div className="wrap-input">
            <input autoComplete="off" type={type} {...rest} className={className} />
        </div>
    );
}

export default Input;
