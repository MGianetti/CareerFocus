import { defaultTheme } from "@theme";

export const wrapperStyles: React.CSSProperties = {
  backgroundColor: "#F8F9FA",
  padding: "30px 35px",
  display: "flex",
};

export const wrapperSmStyles: React.CSSProperties = {
  ...wrapperStyles,
  padding: 0,
};

export const menuNavWrapperStyles: React.CSSProperties = {
  backgroundColor: "white",
  padding: "30px 35px",
  width: "600px",
  boxShadow: "0px 2px 14px rgba(0, 0, 0, 0.15)",
};

export const menuNavWrapperSmStyles: React.CSSProperties = {
  ...menuNavWrapperStyles,
  width: "100%",
  minWidth: "400px",
};

export const basketWrapperStyles: React.CSSProperties = {
  backgroundColor: "white",
  width: "320px",
  height: "fit-content",
  marginLeft: "35px",
  boxShadow: "0px 2px 14px rgba(0, 0, 0, 0.15)",
};

export const lastOptionStyles: React.CSSProperties = { height: "122px" };
