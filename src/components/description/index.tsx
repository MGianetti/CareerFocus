import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Description: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default Description;
