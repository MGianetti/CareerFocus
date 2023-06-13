import React from "react";

type AddIconProps = {
  size?: number;
  color?: string;
};

const AddIcon: React.FC<AddIconProps> = ({ size = 24, color = "black" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
    >
      <path d="M0 10h24v4h-24v-4z" />
      <path d="M10 0h4v24h-4v-24z" />
    </svg>
  );
};

export default AddIcon;
