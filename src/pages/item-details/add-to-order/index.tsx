import { Button, IconButton } from "@components";
import {
  quantityControllerStyles,
  quantityCounterStyles,
  wrapperStyles,
} from "./add-to-order.styles";

const AddToOrder: React.FC = () => {
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
        >{`Add to order • ${`R$11.75`}`}</span>
      </Button>
    </div>
  );
};

export default AddToOrder;
