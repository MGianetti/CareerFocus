import React from "react";
import {
  imageWrapperStyles,
  imgStyles,
  menuOptionWrapperStyles,
  optionsDescriptionStyles,
  titleStyles,
} from "./menu-option.styles";
import { Badge } from "@components";

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
        <div
          style={{
            fontFamily: "Roboto",
            fontSize: "14px",
            display: "flex",
            color: "white",
          }}
        >
          <Badge>1</Badge>
          <h1 style={titleStyles}>{title}</h1>
        </div>
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
