import { defaultTheme } from "@theme";

export const menuOptionWrapperStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  margin: "24px 0",
};

export const optionsDescriptionStyles: React.CSSProperties = {
  color: "#464646",
  display: "flex",
  flexDirection: "column",
  fontFamily: "Roboto",
  fontSize: "16px",
};

export const titleStyles: React.CSSProperties = {
  fontSize: "16px",
  color: "#121212",
  margin: 0,
};

export const imgStyles: React.CSSProperties = {
  objectFit: "cover",
};

export const imageWrapperStyles: React.CSSProperties = {
  borderRadius: "4px",
  display: "flex",
  height: "85px",
  justifyItems: "center",
  overflow: "hidden",
  width: "128px",
};

export const badgeTitleStyles: React.CSSProperties = {
  fontFamily: "Roboto",
  fontSize: "14px",
  display: "flex",
  color: "white",
};

export const descriptionStyles: React.CSSProperties = { maxWidth: "390px" };
export const descriptionSmStyles: React.CSSProperties = {
  height: "37px",
  maxWidth: "500px",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitLineClamp: "2",
  WebkitBoxOrient: "vertical",
  background: "#fff",
  textOverflow: "ellipsis",
};

export const descriptionXsmStyles: React.CSSProperties = {
  ...descriptionSmStyles,
  maxWidth: "200px",
};
