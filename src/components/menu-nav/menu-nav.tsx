import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const MenuNav: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default MenuNav;
