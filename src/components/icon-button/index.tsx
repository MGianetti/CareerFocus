import React from "react";
import {
  AddIcon,
  ChevronIcon,
  CloseIcon,
  HamburgerIcon,
  RemoveIcon,
  SearchIcon,
} from "../icon";
import { iconButtonStyles } from "./icon-button.styles";

type IconButtonProps = {
  backgroundColor?: string;
  color?: string;
  icon: "add" | "chevron" | "close" | "hamburguer" | "remove" | "search";
  onClick?: () => void;
  position: string;
  size?: number;
  margin?: string;
};

const iconComponents = {
  add: AddIcon,
  chevron: ChevronIcon,
  close: CloseIcon,
  hamburguer: HamburgerIcon,
  remove: RemoveIcon,
  search: SearchIcon,
};

const IconButton: React.FC<IconButtonProps> = ({
  icon = "add",
  size = 24,
  color = "black",
  backgroundColor = "white",
  position = "fixed",
  margin = "0",
  onClick,
}) => {
  const IconComponent = iconComponents[icon];

  if (!IconComponent) {
    return null;
  }

  return (
    <button
      style={{
        ...iconButtonStyles({
          size,
          backgroundColor,
          position,
          margin,
        }),
      }}
      onClick={onClick}
    >
      <IconComponent size={size} color={color} />
    </button>
  );
};

export default IconButton;
