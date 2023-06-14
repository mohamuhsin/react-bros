import React from "react";

const Button = (props) => {
  return <button>{props.type || "button"}</button>;
};

export default Button;
