import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Button: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Button;
