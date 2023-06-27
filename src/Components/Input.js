import React from "react";

const Input = ({ id, placeholder, label, type, register, errorMessage }) => {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input type={type} id={id} placeholder={placeholder} {...register} />
      <span className="error">{errorMessage}</span>
    </div>
  );
};
export default Input;
