import { Button, IconButton } from "@components";
import { useResponsiveness } from "@contexts/responsiveness";
import { useBasket } from "@contexts/basket";
import { AddToCartProps } from "./add-to-order.types";
import {
  addToOrderButtonStyles,
  quantityControllerStyles,
  quantityCounterStyles,
  wrapperSmStyles,
  wrapperStyles,
} from "./add-to-order.styles";

const AddToOrder: React.FC<AddToCartProps> = (props) => {
  const {
    price = 0,
    quantityToAdd = 0,
    onClickAddToOrder,
    onClickYourBasket,
    handleQuantityChange,
    isPopOverClosed,
  } = props;
  const { isSmall } = useResponsiveness();
  const { getTotalOrderItems } = useBasket();

  const increaseQuantity = () => handleQuantityChange(quantityToAdd + 1);

  const normalizedQuantityToDecrease =
    quantityToAdd - 1 > 1 ? quantityToAdd - 1 : 1;

  const getPrice = () => parseFloat(`${price * quantityToAdd}`).toFixed(2);

  const decreaseQuantity = () =>
    handleQuantityChange(normalizedQuantityToDecrease);

  const isSmallAndPopoverOpened = isSmall && !isPopOverClosed;
  const isSmallAndPopOverClosed = isSmall && isPopOverClosed;
  const isNotSmallAndPopoverOpened = !isSmall && !isPopOverClosed;
  const isNotSmallAndPopoverClosed = !isSmall && isPopOverClosed;

  const shouldRenderFooterBasket =
    isSmallAndPopOverClosed || isNotSmallAndPopoverClosed;

  const shouldUseSmallWrapperStyles =
    isSmallAndPopoverOpened || isSmallAndPopOverClosed;

  const shouldRenderAddingButtons =
    isSmallAndPopoverOpened || isNotSmallAndPopoverOpened;

  return (
    <div style={shouldUseSmallWrapperStyles ? wrapperSmStyles : wrapperStyles}>
      {shouldRenderAddingButtons && (
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
      )}

      <Button
        width={432}
        height={48}
        backgroundColor="#4F372F"
        margin="4px 24px"
        padding={20}
        borderRadius="40px"
      >
        {shouldRenderFooterBasket ? (
          <span
            style={addToOrderButtonStyles}
            onClick={onClickYourBasket}
          >{`Your basket • ${`${getTotalOrderItems()} item`}`}</span>
        ) : (
          <span
            style={addToOrderButtonStyles}
            onClick={onClickAddToOrder}
          >{`Add to order • ${`R$ ${getPrice()}`}`}</span>
        )}
      </Button>
    </div>
  );
};

export default AddToOrder;
