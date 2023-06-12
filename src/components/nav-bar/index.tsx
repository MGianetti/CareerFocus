import React, { MouseEventHandler, useState } from "react";
import {
  aStyles,
  borderWrapperStyles,
  centralWrapperStyles,
  headerStyles,
  iconStyles,
  imgStyles,
  liSelectedStyles,
  liStyles,
  mobileStyles,
  navStyles,
  ulStyles,
} from "./nav-bar.styles";
import { useResponsiveness } from "@contexts/responsiveness";
import { HamburgerIcon } from "@components/icon";

interface Option {
  label: string;
  href: string;
}
interface Props {
  options: Option[];
}

const NavBar: React.FC<Props> = (props) => {
  const { options } = props;

  const { isExtraSmall } = useResponsiveness();

  const [selectedOption, setSelectedOption] = useState(0);

  const handleOptionChange =
    (option: number) =>
    (event: MouseEventHandler<HTMLAnchorElement> | undefined) => {
      event.preventDefault();
      setSelectedOption(option);
    };

  const renderOptionsForPc = () =>
    options.map((option, index) => {
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
    });

  const renderOptionsForMobile = () => (
    <div style={mobileStyles}>
      <div style={borderWrapperStyles}></div>
      <div style={centralWrapperStyles}>Menu</div>
      <div style={borderWrapperStyles}>
        <HamburgerIcon style={iconStyles} />
      </div>
    </div>
  );

  return (
    <nav style={navStyles}>
      <ul style={ulStyles}>
        {!isExtraSmall && renderOptionsForPc()}
        {isExtraSmall && renderOptionsForMobile()}
      </ul>

      <header style={headerStyles}>
        <img style={imgStyles} src="src/assets/headerBackground.png" />
      </header>
    </nav>
  );
};

export default NavBar;
