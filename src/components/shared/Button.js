import React from "react";
import classes from "./Button.module.css";

function Button({ children, type, isPressed, setFilter, name, onClick }) {
  return (
    <button
      type={type}
      className={classes.button}
      aria-pressed={isPressed}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

Button.defaultProps = {
  type: "button",
};
