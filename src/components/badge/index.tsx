import React, { ReactNode } from "react";
import { badgeStyles } from "./badge.styles";

interface Props {
  children: ReactNode;
  background?: string;
}

const Badge: React.FC<Props> = (props) => {
  const { children, background = "#4F372F" } = props;
  return <div style={{ ...badgeStyles, background }}>{children}</div>;
};

export default Badge;
