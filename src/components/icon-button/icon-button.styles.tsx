import { defaultTheme } from "@theme";

type IconButtonStylesProps = {
  size: number;
  backgroundColor: string;
  position: string;
};

type IconButtonStyles = (props: IconButtonStylesProps) => React.CSSProperties;

export const iconButtonStyles: IconButtonStyles = ({
  size,
  backgroundColor,
  position,
}) => ({
  position,
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
