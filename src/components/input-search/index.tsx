import { SearchIcon } from "@components/icon";
import React from "react";
import {
  inputSearchStyles,
  searchIconStyles,
  wrapperStyles,
} from "./input-search.styles";

interface Props {
  placeholder: string;
}

const InputSearch: React.FC<Props> = (props) => {
  const { placeholder } = props;
  return (
    <div style={wrapperStyles}>
      <SearchIcon style={searchIconStyles} />
      <input placeholder={placeholder} style={inputSearchStyles} />
    </div>
  );
};

export default InputSearch;
