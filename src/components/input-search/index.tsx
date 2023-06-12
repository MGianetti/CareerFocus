import { SearchIcon } from "@components/icon";
import React from "react";
import { inputSearchStyles, searchIconStyles } from "./input-search.styles";

interface Props {
  placeholder: string;
}

const InputSearch: React.FC<Props> = (props) => {
  const { placeholder } = props;
  return (
    <>
      <SearchIcon style={searchIconStyles} />
      <input placeholder={placeholder} style={inputSearchStyles} />
    </>
  );
};

export default InputSearch;
