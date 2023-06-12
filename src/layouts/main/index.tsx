import React, { ReactNode } from "react";

import { useResponsiveness } from "@contexts/responsiveness";
import { mainContent, mainContentSmall, mainWrapper } from "./main.styles";

interface Props {
  children: ReactNode;
}

const Main: React.FC<Props> = ({ children }) => {
  const { isSmall } = useResponsiveness();

  const responsiveStyle = isSmall ? mainContentSmall : mainContent;

  return (
    <div style={mainWrapper}>
      <div style={responsiveStyle}>{children}</div>
    </div>
  );
};

export default Main;
