import { ReactNode } from "react";

export type PopoverContentProps = {
  onClose: () => void;
  children: ReactNode;
};
