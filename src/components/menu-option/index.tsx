import React from "react";
import {
  imageWrapperStyles,
  imgStyles,
  menuOptionWrapperStyles,
  optionsDescriptionStyles,
  titleStyles,
  badgeTitleStyles,
  descriptionStyles,
  descriptionSmStyles,
} from "./menu-option.styles";
import { Badge } from "@components";
import { useResponsiveness } from "@contexts/responsiveness";

interface Props {
  title: string;
  description: string;
  id: number;
  price: number;
  imgSrc: string | undefined;
  isPopoverOpen: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const MenuOption: React.FC<Props> = (props) => {
  const { title, description, price, imgSrc, onClick, id } = props;

  const { isSmall } = useResponsiveness();
  return (
    <>
      <div
        style={menuOptionWrapperStyles}
        onClick={(e) => onClick(e)}
        key={`${id}-key`}
      >
        <div style={optionsDescriptionStyles}>
          <div style={badgeTitleStyles}>
            {/* TODO Sync badge with context */}
            {/* <Badge>0</Badge> */}
            <h1 style={titleStyles}>{title}</h1>
          </div>
          <p style={isSmall ? descriptionSmStyles : descriptionStyles}>
            {description}
          </p>
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
