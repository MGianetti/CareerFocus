import ChevronIcon from "@components/icon/chevron";
import { FC, ReactNode, useState } from "react";
import {
  buttonStyles,
  categoryStyles,
  collapserStyles,
  collapsingRowStyles,
} from "./collapser.styles";

interface CollapserProps {
  category: string;
  children: ReactNode;
}

const Collapser: FC<CollapserProps> = (props) => {
  const { category, children } = props;
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div style={collapserStyles}>
      <div style={collapsingRowStyles}>
        <h2 style={categoryStyles}>{category}</h2>
        <button style={buttonStyles} onClick={() => setIsOpen(!isOpen)}>
          <ChevronIcon isOpen={isOpen} />
        </button>
      </div>
      {isOpen && children}
    </div>
  );
};

export default Collapser;
