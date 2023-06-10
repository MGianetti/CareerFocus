import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const OptionDetails: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default OptionDetails;
