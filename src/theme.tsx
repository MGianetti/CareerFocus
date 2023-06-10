export interface Theme {
  colors: {
    primary: string;
    background: string;
    textPrimary: string;
    textSecondary: string;
  };
  typography: {
    fontFamily: string;
    fontSize: {
      h1: string;
      h2: string;
      h3: string;
      body: string;
    };
    fontWeight: {
      normal: number;
      bold: number;
      bolder: number;
    };
    lineHeight: string;
  };
  spacing: {
    small: string;
    medium: string;
    large: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
  };
  borders: {
    borderRadiusSm: string;
    borderRadiusMd: string;
    borderRadiusFull: string;
    borderColor: string;
    borderWidthSm: string;
    borderWidthMd: string;
  };
  shadows: {
    boxShadowSm: string;
    boxShadowMd: string;
  };
}

export const defaultTheme: Theme = {
  colors: {
    primary: "#4F372F",
    background: "#FFF",
    textPrimary: "#121212",
    textSecondary: "#464646",
  },
  typography: {
    fontFamily: "Roboto",
    fontSize: {
      h1: "24px",
      h2: "20px",
      h3: "16px",
      body: "16px",
    },
    fontWeight: {
      normal: 300,
      bold: 500,
      bolder: 700,
    },
    lineHeight: "19px",
  },
  spacing: {
    small: "string",
    medium: "string",
    large: "string",
  },
  breakpoints: {
    sm: "string",
    md: "string",
    lg: "string",
  },
  borders: {
    borderRadiusSm: "4px",
    borderRadiusMd: "8px",
    borderRadiusFull: "100%",
    borderColor: "#8A94A4",
    borderWidthSm: "1px",
    borderWidthMd: "2px",
  },
  shadows: {
    boxShadowSm: "0px 2px 14px rgba(0, 0, 0, 0.15)",
    boxShadowMd: "0px 4px 4px rgba(0, 0, 0, 0.16)",
  },
};
