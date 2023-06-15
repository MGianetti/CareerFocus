import { useBasket } from "@contexts/basket";
import {
  barketLabelStyle,
  basketInfosrapperStyles,
  basketItemTitleStyles,
  basketItemWrapperStyles,
  basketSubInfosStyles,
  basketSubInfosWrapperStyles,
  checkoutLabelStyles,
  checkoutWrapperStyles,
  itemPriceStyles,
  quantityControllerStyles,
  quantityCounterStyles,
  subTotalLabelWrapperStyles,
  subTotalPriceWrapperStyles,
  subTotalWrapperStyles,
  totalLabelWrapperStyles,
  totalPriceLabelStyles,
  totalWrapperStyles,
  wrapperStyles,
} from "./basket.styles";
import { Button, IconButton } from "@components";

const Basket: React.FC = () => {
  const { state, dispatch, getItemQuantity } = useBasket();
  const isLoading = state.items === undefined;

  const renderBasketItems = () => {
    return (
      !isLoading &&
      state.items.map((item) => {
        return (
          <div style={basketItemWrapperStyles} key={item.id}>
            <div style={basketInfosrapperStyles}>
              <h3 style={basketItemTitleStyles}>{item.name}</h3>
              <span style={itemPriceStyles}>{`R$ ${item.price}`}</span>
            </div>
            <div style={basketSubInfosWrapperStyles}>
              <h3 style={basketSubInfosStyles}>{item.description}</h3>
            </div>
            <div style={quantityControllerStyles}>
              <IconButton
                position="inherit"
                icon="remove"
                size={20}
                color="white"
                backgroundColor="#4F372F"
                onClick={() =>
                  dispatch({ type: "REMOVE_ITEM", itemId: item.id })
                }
              />
              <span style={quantityCounterStyles}>
                {getItemQuantity(item.id)}
              </span>
              <IconButton
                position="inherit"
                icon="add"
                size={20}
                color="white"
                backgroundColor="#4F372F"
                onClick={() =>
                  dispatch({ type: "UPDATE_ITEM", itemId: item.id })
                }
              />
            </div>
          </div>
        );
      })
    );
  };

  return (
    <div style={wrapperStyles}>
      <h2 style={barketLabelStyle}>Carrinho</h2>
      {/* Items */}
      {renderBasketItems()}

      {/* Sub total */}
      <div style={subTotalWrapperStyles}>
        <h2 style={subTotalLabelWrapperStyles}>Sub total</h2>
        <span style={subTotalPriceWrapperStyles}>R$ 22,50</span>
      </div>

      {/* Total */}
      <div style={totalWrapperStyles}>
        <h2 style={totalLabelWrapperStyles}>Total:</h2>
        <span style={totalPriceLabelStyles}>R$ 48,00</span>
      </div>

      {/* Checkout */}
      <div style={checkoutWrapperStyles}>
        <Button
          height={48}
          backgroundColor="#4F372F"
          margin={0}
          padding={20}
          borderRadius="40px"
          onClick={() => dispatch({ type: "CLEAR" })}
        >
          <span style={checkoutLabelStyles}>{`Checkout Now`}</span>
        </Button>
      </div>
    </div>
  );
};

export default Basket;
