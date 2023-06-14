import React, { MouseEventHandler, useState } from "react";
import {
  menuItemStyles,
  menuNavStyles,
  imageStyles,
  menuItemLabelStyles,
  menuItemSelectedStyles,
  imageSelectedStyles,
  whiteBorderStyles,
} from "./menu-nav.styles";

interface Option {
  label: string;
  src: string;
}
interface Props {
  options: Option[];
}

const MenuNav: React.FC<Props> = (props) => {
  const { options } = props;

  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionChange =
    (option: number) =>
    (event: MouseEventHandler<HTMLAnchorElement> | undefined) => {
      event.preventDefault();
      setSelectedOption(option);
    };

  return (
    <nav style={menuNavStyles}>
      {options.map((option, index) => {
        const optionKey = `${option.label}-key`;
        const isOptionSelected = index === selectedOption;

        return (
          <li
            key={optionKey}
            style={isOptionSelected ? menuItemSelectedStyles : menuItemStyles}
            onClick={handleOptionChange(index)}
          >
            <div style={whiteBorderStyles} />
            <img
              style={isOptionSelected ? imageSelectedStyles : imageStyles}
              src={option.src}
            />
            <span style={menuItemLabelStyles}>{option.label}</span>
          </li>
        );
      })}
    </nav>
  );
};

export default MenuNav;
