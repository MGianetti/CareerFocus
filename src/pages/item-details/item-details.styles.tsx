import { defaultTheme } from "@theme";

export const wrapperStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  maxHeight: "720px",
};
export const imgStyles: React.CSSProperties = {
  objectFit: "cover",
  margin: "-1px",
};

export const detailsWraperStyles: React.CSSProperties = {
  padding: "16px",
  fontFamily: "Roboto",
  color: "#464646",
};

export const subDetailsWrapperStyles: React.CSSProperties = {
  ...detailsWraperStyles,
  backgroundColor: "#F8F9FA",
};

export const headingStyles: React.CSSProperties = {
  fontSize: "24px",
  fontWeight: 700,
  margin: "0 0 8px 0",
  color: "#121212",
};

export const headingParagraphStyles: React.CSSProperties = {
  margin: 0,
};

export const subHeadingStyles: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: 700,
  margin: "0 0 8px 0",
  color: "#464646",
  marginBottom: 0,
};

export const subHeadingParagraphStyles: React.CSSProperties = {
  fontSize: "16px",
  fontWeight: 300,
  color: "#5F5F5F",
  margin: 0,
};

export const modifierWrapperStyles: React.CSSProperties = {
  display: "flex",
  justifyItems: "center",
  justifyContent: " space-between",
  padding: "16px",
};

export const modifierHeadingStyles: React.CSSProperties = {
  margin: 0,
  fontSize: "16px",
  fontWeight: 500,
  fontFamily: "Roboto",
  color: "#121212",
};

export const modifierParagraphStyles: React.CSSProperties = {
  margin: 0,
  fontWeight: 400,
  color: "#464646",
  fontFamily: "Roboto",
};

export const checkboxStyles: React.CSSProperties = {
  width: "20px",
  height: "20px",
  backgroundColor: "white",
  borderRadius: "50%",
  verticalAlign: "middle",
  border: "3px solid #5F5F5F",
  appearance: "none",
  outline: "none",
  cursor: "pointer",
  display: "flex",
  marginTop: "10px",
};
