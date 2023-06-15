import { SearchIcon } from "@components/icon";
import React, { useState } from "react";
import {
  inputSearchStyles,
  searchIconStyles,
  wrapperSmStyles,
  wrapperStyles,
} from "./input-search.styles";
import { useResponsiveness } from "@contexts/responsiveness";

interface Props {
  placeholder: string;
}

const InputSearch: React.FC<Props> = (props) => {
  const { isSmall } = useResponsiveness();
  const { placeholder } = props;
  const [searchText, setSearchText] = useState("");

  return (
    <div style={isSmall ? wrapperSmStyles : wrapperStyles}>
      <SearchIcon style={searchIconStyles} />
      <input
        placeholder={placeholder}
        style={inputSearchStyles}
        value={searchText}
        onChange={(e) => setSearchText(e.currentTarget.value)}
      />
    </div>
  );
};

export default InputSearch;
