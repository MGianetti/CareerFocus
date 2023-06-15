import { Button, IconButton } from "@components";
import {
  quantityControllerStyles,
  quantityCounterStyles,
  wrapperStyles,
} from "./add-to-order.styles";

interface AddToCartProps {
  price: number;
  onClick: () => void;
}

const AddToOrder: React.FC<AddToCartProps> = (props) => {
  const { price, onClick } = props;

  return (
    <div style={wrapperStyles}>
      <div style={quantityControllerStyles}>
        <IconButton
          position="inherit"
          icon="remove"
          size={32}
          color="#5F5F5F"
          backgroundColor="#DADADA"
        />
        <span style={quantityCounterStyles}>1</span>
        <IconButton
          position="inherit"
          icon="add"
          size={32}
          color="white"
          backgroundColor="#4F372F"
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
          style={{
            fontFamily: "Roboto",
            color: "white",
            fontSize: "18px",
            letterSpacing: "0.75px",
            fontWeight: "500",
          }}
          onClick={onClick}
        >{`Add to order • ${`R$ ${price}`}`}</span>
      </Button>
    </div>
  );
};

export default AddToOrder;
