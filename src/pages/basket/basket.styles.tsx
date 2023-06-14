import { defaultTheme } from "@theme";

export const wrapperStyles: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#F8F9FA",
};

export const quantityCounterStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  fontFamily: "Roboto",
  fontSize: "16px",
  fontWeight: 600,
  textAlign: "center",
  margin: "0 16px",
  padding: "8px 0",
  color: "#121212",
};

export const quantityControllerStyles: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  padding: "8px 16px",
};

export const barketLabelStyle: React.CSSProperties = {
  margin: "22px",
  fontFamily: "Roboto",
  fontSize: "24px",
  lineHeight: "28px",
  color: "#464646",
};

export const basketItemWrapperStyles: React.CSSProperties = {
  backgroundColor: "white",
  paddingTop: "8px",
  borderBottom: "1px solid #EEEEEE",
};

export const basketInfosrapperStyles: React.CSSProperties = {
  padding: "8px 16px",
  display: "flex",
  fontFamily: "Roboto",
  justifyContent: "space-between",
};

export const basketItemTitleStyles: React.CSSProperties = {
  margin: 0,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#121212",
  fontWeight: "500",
};
export const itemPriceStyles: React.CSSProperties = { margin: 0 };

export const basketSubInfosWrapperStyles: React.CSSProperties = {
  padding: "0 16px",
  display: "flex",
  fontFamily: "Roboto",
  justifyContent: "space-between",
};

export const basketSubInfosStyles: React.CSSProperties = {
  margin: 0,
  fontSize: "16px",
  lineHeight: "19px",
  color: "#5F5F5F",
  fontWeight: "500",
};

export const checkoutWrapperStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  padding: "8px 0",
};

export const checkoutLabelStyles: React.CSSProperties = {
  fontFamily: "Roboto",
  color: "white",
  fontSize: "18px",
  letterSpacing: "0.75px",
  fontWeight: "500",
};

export const totalWrapperStyles: React.CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderBottom: "1px solid #EEEEEE",
  padding: "16px",
  fontSize: "24px",
  fontFamily: "Roboto",
  fontWeight: 300,
  color: "#121212",
};

export const subTotalWrapperStyles: React.CSSProperties = {
  ...totalWrapperStyles,
  fontSize: "16px",
};

export const subTotalLabelWrapperStyles: React.CSSProperties = {
  margin: 0,
  fontWeight: 300,
};
export const subTotalPriceWrapperStyles: React.CSSProperties = {};

export const totalLabelWrapperStyles: React.CSSProperties = {
  margin: 0,
  fontWeight: 300,
};
export const totalPriceLabelStyles: React.CSSProperties = { fontWeight: 500 };
