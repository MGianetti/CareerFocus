export const mainWrapper: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
};
export const mainContentStyles: React.CSSProperties = { width: "1024px" };

export const mainContentSmallStyles: React.CSSProperties = {
  width: "100%",
  minWidth: "400px",
};
export const loadingMainContentStyles: React.CSSProperties = {
  ...mainContentStyles,
  display: "flex",
  justifyContent: "center",
  marginTop: "64px",
};
