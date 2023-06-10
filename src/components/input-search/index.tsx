import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const InputSearch: React.FC<Props> = ({ children }) => {
  return <div>{children}</div>;
};

export default InputSearch;
