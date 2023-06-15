import { ReactNode } from "react";

export interface ButtonProps {
  children: ReactNode;
  backgroundColor: string;
  margin: number | string;
  padding: number | string;
  borderRadius: number | string;
  width?: number | string;
  height?: number | string;
  onClick?: () => void;
}
