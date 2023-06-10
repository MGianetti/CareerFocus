import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const NavBar: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default NavBar;
