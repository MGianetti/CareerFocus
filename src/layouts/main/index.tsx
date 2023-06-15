import React, { ReactNode } from "react";

import { useResponsiveness } from "@contexts/responsiveness";
import {
  loadingMainContentStyles,
  mainContentSmallStyles,
  mainContentStyles,
  mainWrapper,
} from "./main.styles";
import { Spinner } from "@components";

interface Props {
  children: ReactNode;
  isLoading: boolean;
}

const Main: React.FC<Props> = (props) => {
  const { children, isLoading } = props;
  const { isSmall } = useResponsiveness();

  const responsiveStyle = isSmall ? mainContentSmallStyles : mainContentStyles;

  return (
    <div style={mainWrapper}>
      {!isLoading && <div style={responsiveStyle}>{children}</div>}
      {isLoading && (
        <div style={loadingMainContentStyles}>
          <Spinner />
        </div>
      )}
    </div>
  );
};

export default Main;
