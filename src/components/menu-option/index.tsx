import React, { ReactNode } from "react";

interface Props {
  children?: ReactNode;
}

const MenuOption: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default MenuOption;
