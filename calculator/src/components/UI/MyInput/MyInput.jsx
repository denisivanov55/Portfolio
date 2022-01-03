import React, {forwardRef} from "react";
import './MyInput.css';

const MyInput = forwardRef(({placeHolder, id, className, onInput, onChange}, ref) => {
    return (
        <input
            ref={ref}
            type='text'
            id={id}
            className={`myInput ${className}`}
            placeholder={placeHolder}
            onInput={onInput}
            onChange={onChange}
        />
    );
});

export default MyInput;