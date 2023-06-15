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
import { useData } from "@contexts/restaurant";

interface Option {
  label: string;
  href: string;
}
interface Props {
  options: Option[];
}

const NavBar: React.FC<Props> = (props) => {
  const { options } = props;

  const { isSmall } = useResponsiveness();
  const [{ restaurant }] = useData();
  const [selectedOption, setSelectedOption] = useState(0);

  const isLoading = restaurant === null;

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
        {!isSmall && renderOptionsForPc()}
        {isSmall && renderOptionsForMobile()}
      </ul>

      <header style={headerStyles}>
        {!isLoading && (
          <img
            style={imgStyles}
            src={`${restaurant?.webSettings.bannerImage}`}
          />
        )}
      </header>
    </nav>
  );
};

export default NavBar;
