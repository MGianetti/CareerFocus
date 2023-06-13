import React from "react";
import {
  imageWrapperStyles,
  imgStyles,
  menuOptionWrapperStyles,
  optionsDescriptionStyles,
  titleStyles,
  badgeTitleStyles,
} from "./menu-option.styles";
import { Badge } from "@components";
import Popover from "@components/pop-over";

interface Props {
  title: string;
  description: string;
  price: string;
  imgSrc: string;
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
    </>
  );
};

export default MenuOption;
