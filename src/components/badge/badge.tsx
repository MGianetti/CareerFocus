import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Badge: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Badge;
