import { defaultTheme } from "@theme";

export const navStyles = {
  backgroundColor: defaultTheme.colors.primary,
  display: "flex",
  justifyContent: "center",
  width: "100%",
  flexDirection: "column",
};

export const ulStyles = {
  display: "flex",
  justifyContent: "center",
  margin: 0,
  height: "52px",
};

export const liStyles = {
  margin: 0,
  listStyle: "none",
  width: "232px",
};

export const liSelectedStyles = {
  ...liStyles,
  borderBottom: "5px solid white",
};

export const aStyles = {
  display: "flex",
  fontFamily: defaultTheme.typography.fontFamily,
  fontWeight: defaultTheme.typography.fontWeight.bold,
  justifyContent: "center",
  textTransform: "uppercase",
  height: "100%",
  alignItems: "center",
};

export const headerStyles = {
  position: "relative",
  width: "100%",
  height: "150px",
};

export const imgStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
};
