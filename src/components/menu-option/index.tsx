import React from "react";
import {
  imageWrapperStyles,
  imgStyles,
  menuOptionWrapperStyles,
  optionsDescriptionStyles,
  titleStyles,
} from "./menu-option.styles";

interface Props {
  title: string;
  description: string;
  price: string;
  imgSrc: string;
}

const MenuOption: React.FC<Props> = (props) => {
  const { title, description, price, imgSrc } = props;

  return (
    <div style={menuOptionWrapperStyles}>
      <div style={optionsDescriptionStyles}>
        <h1 style={titleStyles}>{title}</h1>
        <p>{description}</p>
        <span>{price}</span>
      </div>
      <div style={imageWrapperStyles}>
        <img style={imgStyles} src={imgSrc}></img>
      </div>
    </div>
  );
};

export default MenuOption;
