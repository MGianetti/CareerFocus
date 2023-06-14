import React from "react";

interface ButtonProps {
  children: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = (props) => {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
