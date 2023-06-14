import { defaultTheme } from "@theme";

type ButtonStylesProps = {
  backgroundColor: string;
  margin: number | string;
  padding: number | string;
  borderRadius: number | string;
  width: number | string;
  height: number | string;
};

type ButtonStyles = (props: ButtonStylesProps) => React.CSSProperties;

export const buttonStyles: ButtonStyles = ({
  backgroundColor,
  margin,
  padding,
  width,
  height,
  borderRadius,
}) => ({
  margin,
  padding,
  width,
  height,
  borderRadius,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor,
  cursor: "pointer",
  border: "unset",
});
