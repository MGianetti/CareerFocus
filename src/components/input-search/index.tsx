import React from "react";

interface Props {
  placeholder?: string;
}

const InputSearch: React.FC<Props> = (props) => {
  const { placeholder } = props;
  return <input placeholder={placeholder} />;
};

export default InputSearch;
