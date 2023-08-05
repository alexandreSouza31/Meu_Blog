// CustomInput.js
import React from "react";

const CustomInput = ({ type, name, required, placeholder, value, onChange }) => {
  return (
    <div className="input-wrapper">
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default CustomInput;
