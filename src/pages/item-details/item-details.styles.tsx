import { defaultTheme } from "@theme";

export const wrapperStyles = { display: "flex", flexDirection: "column" };
export const imgStyles = { objectFit: "cover" };

export const detailsWraperStyles = {
  padding: "16px",
  fontFamily: "Roboto",
  color: "#464646",
};

export const subDetailsWrapperStyles = {
  ...detailsWraperStyles,
  backgroundColor: "#F8F9FA",
};

export const headingStyles = {
  fontSize: "24px",
  fontWeight: 700,
  margin: "0 0 8px 0",
  color: "#121212",
};

export const headingParagraphStyles = {
  margin: 0,
};

export const subHeadingStyles = {
  fontSize: "16px",
  fontWeight: 700,
  margin: "0 0 8px 0",
  color: "#464646",
  marginBottom: 0,
};

export const subHeadingParagraphStyles = {
  fontSize: "16px",
  fontWeight: 300,
  color: "#5F5F5F",
  margin: 0,
};

export const modifierWrapperStyles = {
  display: "flex",
  justifyItems: "center",
  justifyContent: " space-between",
  padding: "16px",
};

export const modifierHeadingStyles = {
  margin: 0,
  fontSize: "16px",
  fontWeight: 500,
  fontFamily: "Roboto",
  color: "#121212",
};

export const modifierParagraphStyles = {
  margin: 0,
  fontWeight: 400,
  color: "#464646",
  fontFamily: "Roboto",
};

export const checkboxStyles = {
  width: "20px",
  height: "20px",
  backgroundcolor: "white",
  borderRadius: "50%",
  verticalAlign: "middle",
  border: "3px solid #5F5F5F",
  appearance: "none",
  "-webkit-appearance": "none",
  outline: "none",
  cursor: "pointer",
  display: "flex",
  marginTop: "10px",
};
