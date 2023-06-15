import { FC } from "react";

import { ChevronIconProps } from "./chevron.types";

const ChevronIcon: FC<ChevronIconProps> = ({ isOpen }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ transform: `rotate(${isOpen ? 180 : 0}deg)` }}
  >
    <polyline points="6 9 12 15 18 9"></polyline>
  </svg>
);

export default ChevronIcon;
