import React, { ReactNode } from "react";

import { useResponsiveness } from "@contexts/responsiveness";
import { mainContent, mainContentSmall, mainWrapper } from "./main.styles";

interface Props {
  children: ReactNode;
  isLoading: boolean;
}

const Main: React.FC<Props> = (props) => {
  const { children, isLoading } = props;
  const { isSmall } = useResponsiveness();

  const responsiveStyle = isSmall ? mainContentSmall : mainContent;

  return (
    <div style={mainWrapper}>
      {!isLoading && <div style={responsiveStyle}>{children}</div>}
      {isLoading && <div style={responsiveStyle}>Loading</div>}
    </div>
  );
};

export default Main;
