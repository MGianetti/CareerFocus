import React from "react";

import {
  AddIcon,
  ChevronIcon,
  CloseIcon,
  HamburgerIcon,
  RemoveIcon,
  SearchIcon,
} from "../icon";
import { IconButtonProps } from "./icon-button.types";
import { iconButtonStyles } from "./icon-button.styles";

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
