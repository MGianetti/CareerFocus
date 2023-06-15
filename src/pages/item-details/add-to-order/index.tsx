import { Dispatch, SetStateAction } from "react";
import { Button, IconButton } from "@components";
import {
  addToOrderButtonStyles,
  quantityControllerStyles,
  quantityCounterStyles,
  wrapperStyles,
} from "./add-to-order.styles";

interface AddToCartProps {
  price: number;
  quantityToAdd: number;
  onClick: () => void;
  handleQuantityChange: (
    quantityToAdd: number
  ) => Dispatch<SetStateAction<number>>;
}

const AddToOrder: React.FC<AddToCartProps> = (props) => {
  const { price, quantityToAdd, onClick, handleQuantityChange } = props;

  const increaseQuantity = () => handleQuantityChange(quantityToAdd + 1);

  const normalizedQuantityToDecrease =
    quantityToAdd - 1 > 0 ? quantityToAdd - 1 : 0;

  const decreaseQuantity = () =>
    handleQuantityChange(normalizedQuantityToDecrease);

  return (
    <div style={wrapperStyles}>
      <div style={quantityControllerStyles}>
        <IconButton
          position="inherit"
          icon="remove"
          size={32}
          color="#5F5F5F"
          backgroundColor="#DADADA"
          onClick={decreaseQuantity}
        />
        <span style={quantityCounterStyles}>{quantityToAdd}</span>
        <IconButton
          position="inherit"
          icon="add"
          size={32}
          color="white"
          backgroundColor="#4F372F"
          onClick={increaseQuantity}
        />
      </div>

      <Button
        width={432}
        height={48}
        backgroundColor="#4F372F"
        margin="4px 24px"
        padding={20}
        borderRadius="40px"
      >
        <span
          style={addToOrderButtonStyles}
          onClick={onClick}
        >{`Add to order • ${`R$ ${price}`}`}</span>
      </Button>
    </div>
  );
};

export default AddToOrder;
