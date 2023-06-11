import React, { useState } from "react";

interface Option {
  label: string;
  href: string;
}
interface Props {
  options: Option[];
}

const NavBar: React.FC<Props> = (props) => {
  const { options } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <ul style={isOpen ? {} : {}}>
        {options.map((option) => {
          const optionKey = `${option.label}-key`;
          return (
            <li key={optionKey}>
              <a href="">{option.label}</a>
            </li>
          );
        })}
      </ul>

      <button onClick={handleToggle}>{isOpen ? "Close" : "Open"}</button>
    </nav>
  );
};

export default NavBar;
