import { defaultTheme } from "@theme";

export const menuNavStyles = {
  display: "flex",
};

export const menuItemStyles = {
  display: "flex",
  width: "106px",
  justifyContent: "center",
  flexDirection: "column",
  padding: "8px",
  cursor: "pointer",
  marginRight: "16px",
  borderBottom: "3px solid transparent",
};

export const menuItemSelectedStyles = {
  ...menuItemStyles,
  borderBottom: "3px solid #4F372F",
};

export const menuItemLabelStyles = {
  display: "flex",
  width: "100%",
  justifyContent: " center",
  fontFamily: "Roboto",
  padding: "30px 0 16px 0",
};

export const imageStyles = {
  borderRadius: "100%",
  border: "3px solid white",
};
