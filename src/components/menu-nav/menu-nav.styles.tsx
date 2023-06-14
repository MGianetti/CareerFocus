import { defaultTheme } from "@theme";

export const menuNavStyles: React.CSSProperties = {
  display: "flex",
  minWidth: "500px",
};

export const menuItemStyles: React.CSSProperties = {
  display: "flex",
  width: "106px",
  justifyContent: "center",
  flexDirection: "column",
  padding: "8px",
  cursor: "pointer",
  marginRight: "16px",
  borderBottom: "3px solid transparent",
};

export const menuItemSelectedStyles: React.CSSProperties = {
  ...menuItemStyles,
  borderBottom: "3px solid #4F372F",
};

export const menuItemLabelStyles: React.CSSProperties = {
  display: "flex",
  width: "100%",
  justifyContent: " center",
  fontFamily: "Roboto",
  padding: "30px 0 16px 0",
};

export const imageStyles: React.CSSProperties = {
  borderRadius: "100%",
  border: "3px solid white",
};

export const imageSelectedStyles: React.CSSProperties = {
  borderRadius: "100%",
  border: "3px solid #4F372F",
};

export const whiteBorderStyles: React.CSSProperties = {
  width: "84px",
  height: "84px",
  background: "transparent",
  position: "absolute",
  marginTop: "-65px",
  marginLeft: "3px",
  border: "3px solid white",
  borderRadius: "50%",
};
