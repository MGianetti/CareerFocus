import React, { useState } from "react";

import { SearchIcon } from "@components/icon";
import { useResponsiveness } from "@contexts/responsiveness";
import { InputSearchProps } from "./input-search.types";
import {
  inputSearchStyles,
  searchIconStyles,
  wrapperSmStyles,
  wrapperStyles,
} from "./input-search.styles";

export const InputSearch: React.FC<InputSearchProps> = (props) => {
  const { placeholder } = props;
  const { isSmall } = useResponsiveness();
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
