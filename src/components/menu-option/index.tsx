import React, { MouseEvent } from "react";
import {
  imageWrapperStyles,
  imgStyles,
  menuOptionWrapperStyles,
  optionsDescriptionStyles,
  titleStyles,
  badgeTitleStyles,
  descriptionStyles,
  descriptionSmStyles,
  descriptionXsmStyles,
} from "./menu-option.styles";
import { Badge } from "@components";
import { useResponsiveness } from "@contexts/responsiveness";
import { useBasket } from "@contexts/basket";

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
  const { getItemQuantity } = useBasket();
  const { isSmall, isExtraSmall } = useResponsiveness();

  const shouldRenderBadge = getItemQuantity(id) > 0;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClick(e);
  };

  const getDescriptionResponsiveStyles = () => {
    if (isExtraSmall) return descriptionXsmStyles;
    if (isSmall) return descriptionSmStyles;
    return descriptionStyles;
  };

  return (
    <>
      <div
        style={menuOptionWrapperStyles}
        onClick={handleClick}
        key={`${id}-key`}
      >
        <div style={optionsDescriptionStyles}>
          <div style={badgeTitleStyles}>
            {shouldRenderBadge && <Badge>{getItemQuantity(id)}</Badge>}
            <h1 style={titleStyles}>{title}</h1>
          </div>
          <p style={getDescriptionResponsiveStyles()}>{description}</p>
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
