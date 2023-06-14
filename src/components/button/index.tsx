import React, { ReactNode } from "react";
import { buttonStyles } from "./button.styles";

interface ButtonProps {
  children: ReactNode;
  backgroundColor: string;
  margin: number | string;
  padding: number | string;
  borderRadius: number | string;
  width?: number | string;
  height?: number | string;
  onClick?: () => undefined;
}

const Button: React.FC<ButtonProps> = (props) => {
  const {
    children,
    onClick,
    backgroundColor,
    margin,
    padding,
    width,
    height,
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
