import React from "react";

import { buttonStyles } from "./button.styles";
import { ButtonProps } from "./button.types";

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    onClick,
    backgroundColor = "white",
    margin = "10px",
    padding = "10px",
    width = "fit-content",
    height = "auto",
    borderRadius = "0",
  } = props;

  return (
    <button
      onClick={onClick}
      style={buttonStyles({
        backgroundColor,
        margin,
        padding,
        width,
        height,
        borderRadius,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
