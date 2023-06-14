import { defaultTheme } from "@theme";

export const wrapperStyles: React.CSSProperties = {
  position: "relative",
  display: "flex",
  alignContent: "center",
  alignItems: "center",
  margin: "5px 0",
  width: "calc(100% + 34px)",
  marginLeft: "-20px",
};

export const wrapperSmStyles: React.CSSProperties = {
  ...wrapperStyles,
  padding: "0 30px",
};

export const searchIconStyles: React.CSSProperties = {
  color: "#DADADA",
  position: "relative",
  left: "34px",
};

export const inputSearchStyles: React.CSSProperties = {
  width: "100%",
  border: "0.911806px solid #8A94A4",
  borderRadius: "7.29444px",
  height: "40px",
  lineHeight: "18px",
  fontFamily: "Roboto",
  paddingLeft: "40px",
};
