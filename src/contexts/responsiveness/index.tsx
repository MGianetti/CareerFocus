import React, { createContext, useContext } from "react";

import useMediaQuery from "@hooks/useMediaQuery";

type State = {
  isExtraSmall: boolean;
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isExtraLarge: boolean;
};

const initialState: State = {
  isExtraSmall: false,
  isSmall: true,
  isMedium: false,
  isLarge: false,
  isExtraLarge: false,
};

const DataContext = createContext<State>(initialState);

export const ResponsivenessProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const isExtraSmall = useMediaQuery("(max-width: 599px)");
  const isSmall = useMediaQuery("(min-width: 600px) and (max-width: 959px)");
  const isMedium = useMediaQuery("(min-width: 960px) and (max-width: 1279px)");
  const isLarge = useMediaQuery("(min-width: 1280px) and (max-width: 1919px)");
  const isExtraLarge = useMediaQuery("(min-width: 1920px)");

  return (
    <DataContext.Provider
      value={{ isExtraSmall, isSmall, isMedium, isLarge, isExtraLarge }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
