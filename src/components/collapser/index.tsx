import React, { FC, useState } from "react";

import ChevronIcon from "../icon/chevron";
import { CollapserProps } from "./collapser.types";
import {
  buttonStyles,
  categoryStyles,
  collapserStyles,
  collapsingRowStyles,
} from "./collapser.styles";

const Collapser: FC<CollapserProps> = (props) => {
  const { category, children, id } = props;
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div style={collapserStyles} onClick={() => setIsOpen(!isOpen)} key={id}>
      <div style={collapsingRowStyles}>
        <h2 style={categoryStyles}>{category}</h2>
        <button style={buttonStyles}>
          <ChevronIcon isOpen={isOpen} />
        </button>
      </div>
      {isOpen && children}
    </div>
  );
};

export default Collapser;
