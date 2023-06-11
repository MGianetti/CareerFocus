import React from "react";

interface Option {
  label: string;
}
interface Props {
  options: Option[];
}

const MenuNav: React.FC<Props> = (props) => {
  const { options } = props;
  return (
    <nav>
      {options.map((option) => {
        const optionKey = `${option.label}-key`;
        return (
          <li key={optionKey}>
            <a>{option.label}</a>
          </li>
        );
      })}
    </nav>
  );
};

export default MenuNav;
