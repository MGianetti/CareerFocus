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
import { useResponsiveness } from "@contexts/responsiveness";

interface Props {
  title: string;
  description: string;
  price: number;
  imgSrc: string | undefined;
  isPopoverOpen: boolean;
  onClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const MenuOption: React.FC<Props> = (props) => {
  const { title, description, price, imgSrc, onClick } = props;

  const { isSmall } = useResponsiveness();
  return (
    <>
      <div
        style={menuOptionWrapperStyles}
        onClick={(e) => onClick(e)}
        key={`${title}-key`}
      >
        <div style={optionsDescriptionStyles}>
          <div style={badgeTitleStyles}>
            {/* TODO Sync badge with context */}
            {/* <Badge>0</Badge> */}
            <h1 style={titleStyles}>{title}</h1>
          </div>
          <p
            style={
              isSmall
                ? {
                    height: "37px",
                    width: "191px",
                    overflow: "hidden",
                    display: "inline-block",
                    width: "177px",
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: "2",
                    WebkitBoxOrient: "vertical",
                    background: "#fff",
                    textOverflow: "ellipsis",
                  }
                : descriptionStyles
            }
          >
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
