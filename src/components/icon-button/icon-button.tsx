import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const IconButton: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default IconButton;
