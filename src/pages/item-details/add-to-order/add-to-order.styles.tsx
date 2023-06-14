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
};
