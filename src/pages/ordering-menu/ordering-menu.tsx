import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const OrderingMenu: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default OrderingMenu;
