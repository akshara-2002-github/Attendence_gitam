import React from 'react';
import "./index.scss";

const Button = ({ onClick = () => {}, isDisabled = true }) => {
  return (
    <button
      onClick={onClick}
      className={`button ${isDisabled ? "button-disabled" : ""}  `}
    >
      Login
    </button>
  );
};

export default Button;
