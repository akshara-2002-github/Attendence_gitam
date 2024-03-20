import React from 'react';
import "./index.scss";


const TextInput = ({
  title = "",
  placeholder = "",
  isPassword = false,
  value = "",
  onChange = () => {},
}) => {

  const  handleChange = (event)=> {
    onChange(event.currentTarget.value)
    
  }
  
  return (
    <div className="textinput">
      <small className="bold">{title}</small>
      <div className="br" />
      <input
        placeholder={placeholder}
        type={isPassword ? "password" : "text"}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
export default TextInput;
