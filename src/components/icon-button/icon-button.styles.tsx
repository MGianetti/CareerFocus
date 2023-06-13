import { defaultTheme } from "@theme";

type IconButtonStylesProps = {
  size: number;
  backgroundColor: string;
  position: string;
  margin: string;
};

type IconButtonStyles = (props: IconButtonStylesProps) => React.CSSProperties;

export const iconButtonStyles: IconButtonStyles = ({
  size,
  backgroundColor,
  position,
  margin,
}) => ({
  position,
  margin,
  width: size,
  height: size,
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor,
  border: "none",
  cursor: "pointer",
});
