import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const DetailsOption: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default DetailsOption;
