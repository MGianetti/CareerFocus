import React from "react";

import { buttonStyles } from "./button.styles";
import { ButtonProps } from "./button.types";

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    onClick,
    backgroundColor,
    margin,
    padding,
    width = "fit-content",
    height = "auto",
    borderRadius,
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
