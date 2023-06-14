import React from "react";
import {
  imageWrapperStyles,
  imgStyles,
  menuOptionWrapperStyles,
  optionsDescriptionStyles,
  titleStyles,
  badgeTitleStyles,
  descriptionStyles,
} from "./menu-option.styles";
import { Badge } from "@components";

interface Props {
  title: string;
  description: string;
  price: number;
  imgSrc: string | undefined;
  isPopoverOpen: boolean;
  onClick: () => void;
}

const MenuOption: React.FC<Props> = (props) => {
  const { title, description, price, imgSrc, onClick } = props;

  return (
    <>
      <div style={menuOptionWrapperStyles} onClick={onClick}>
        <div style={optionsDescriptionStyles}>
          <div style={badgeTitleStyles}>
            {/* TODO Sync badge with context */}
            {/* <Badge>0</Badge> */}
            <h1 style={titleStyles}>{title}</h1>
          </div>
          <p style={descriptionStyles}>{description}</p>
          <span>{`R$ ${price},00`}</span>
        </div>
        <div style={imageWrapperStyles}>
          <img style={imgStyles} src={imgSrc}></img>
        </div>
      </div>
    </>
  );
};

export default MenuOption;
