import { Dispatch, SetStateAction } from "react";

export interface AddToCartProps {
  price?: number;
  quantityToAdd?: number;
  isPopOverClosed?: boolean;
  onClickAddToOrder?: () => void;
  onClickYourBasket?: () => void;
  handleQuantityChange?: Dispatch<SetStateAction<number>>;
}
