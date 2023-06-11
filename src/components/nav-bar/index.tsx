import React, { MouseEvent, useState } from "react";
import {
  aStyles,
  liStyles,
  navStyles,
  ulStyles,
  headerStyles,
  imgStyles,
  liSelectedStyles,
} from "./nav-bar.styles";

interface Option {
  label: string;
  href: string;
}
interface Props {
  options: Option[];
}

// TODO implement hamburguer and mobile menu
const NavBar: React.FC<Props> = (props) => {
  const { options } = props;
  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionChange =
    (option: number) => (event: MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      event.preventDefault();
      setSelectedOption(option);
    };

  return (
    <nav style={navStyles}>
      <ul style={ulStyles}>
        {options.map((option, index) => {
          const optionKey = `${option.label}-key`;
          const isOptionSelected = index === selectedOption;
          return (
            <li
              style={isOptionSelected ? liSelectedStyles : liStyles}
              key={optionKey}
            >
              <a href="" style={aStyles} onClick={handleOptionChange(index)}>
                {option.label}
              </a>
            </li>
          );
        })}
      </ul>

      <header style={headerStyles}>
        <img style={imgStyles} src="src/assets/headerBackground.png" />
      </header>
    </nav>
  );
};

export default NavBar;
