import React from "react";

const Button = ({ handleClick, children, ...rest }) => (
  <button onClick={handleClick} { ...rest }><b>{ children }</b></button>
);


export default Button;
