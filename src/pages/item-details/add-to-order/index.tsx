import { Button, IconButton } from "@components";
import {
  addToOrderButtonStyles,
  quantityControllerStyles,
  wrapperStyles,
} from "./add-to-order.styles";

const AddToOrder: React.FC = () => {
  return (
    <div style={wrapperStyles}>
      <div style={quantityControllerStyles}>
        <IconButton position="inherit" icon="remove" size={32} />
        <span>1</span>
        <IconButton position="inherit" icon="add" size={32} />
      </div>
      <div style={addToOrderButtonStyles}>
        <Button>Add to order</Button>
      </div>
    </div>
  );
};

export default AddToOrder;
