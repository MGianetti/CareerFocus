import { defaultTheme } from "@theme";

export const wrapperStyles: React.CSSProperties = {
  display: "flex",
  width: "480px",
  flexDirection: "column",
  height: "122px",
  position: "fixed",
  top: "660px",
  padding: "8px 0",
  backgroundColor: "rgba(255, 255, 255, 0.3)",
  backdropFilter: "blur(4px)",
  alignItems: "center",
};

export const wrapperSmStyles: React.CSSProperties = {
  ...wrapperStyles,
  width: "100%",
  height: "70px",
  top: "90%",
};

export const quantityCounterStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  fontFamily: "Roboto",
  fontSize: "24px",
  fontWeight: 600,
  textAlign: "center",
  margin: "0 39.5px",
  padding: "8px 0",
};

export const quantityControllerStyles: React.CSSProperties = {
  display: "flex",
  alignContent: "center",
  justifyContent: "center",
  alignItems: "center",
};

export const addToOrderButtonStyles: React.CSSProperties = {
  fontFamily: "Roboto",
  color: "white",
  fontSize: "18px",
  letterSpacing: "0.75px",
  fontWeight: "500",
};
