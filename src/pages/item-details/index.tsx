import { Action, useBasket } from "@contexts/basket";
import AddToOrder from "./add-to-order";
import {
  detailsWraperStyles,
  headingParagraphStyles,
  headingStyles,
  imgStyles,
  modifierHeadingStyles,
  modifierParagraphStyles,
  modifierWrapperStyles,
  subDetailsWrapperStyles,
  subHeadingParagraphStyles,
  subHeadingStyles,
  wrapperStyles,
  checkboxStyles,
} from "./item-details.styles";
import { useState } from "react";

interface Image {
  id: number;
  image: string;
}

interface ItemModifier {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  available: boolean;
  qty?: number;
}

interface Choice {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ItemModifier[];
}

type Choices = Choice[];

export interface ItemDetailsProp {
  id: number;
  name: string;
  description: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  available: boolean;
  sku: string;
  images: Image[];
  modifiers?: Choices;
  quantity: number;
}

interface ItemDetailsProps {
  item: ItemDetailsProp;
  closeAfterPopoverAdding: () => void;
}

const ItemDetails: React.FC<ItemDetailsProps> = (props) => {
  const { item, closeAfterPopoverAdding } = props;
  const [quantityToAdd, setQuantityToAdd] = useState(1);
  const { dispatch } = useBasket();

  const hasItemModifiers = item.modifiers ?? false;

  const renderModifier = () =>
    item?.modifiers.map((modifier) => (
      <div style={modifierWrapperStyles}>
        <div>
          <h1 style={modifierHeadingStyles}>Smash</h1>
          <p style={modifierParagraphStyles}>Lorem ipsum dolor amet</p>
        </div>

        <input style={checkboxStyles} type="checkbox" />
      </div>
    ));

  const renderModifierHeader = () => (
    <div style={subDetailsWrapperStyles}>
      <h1 style={subHeadingStyles}>
        {hasItemModifiers && item.modifiers[0].name}
      </h1>
      <p style={subHeadingParagraphStyles}>Lorem ipsum dolor amet</p>
    </div>
  );

  const normalizedImgSrc =
    item.images !== undefined ? item.images[0].image : false;

  const hasImgSrc = normalizedImgSrc;

  return (
    <div style={wrapperStyles} key={item.name}>
      {hasImgSrc && <img style={imgStyles} src={normalizedImgSrc} />}

      <div style={detailsWraperStyles}>
        <h1 style={headingStyles}>{item.name}</h1>
        <p style={headingParagraphStyles}>{item.description}</p>
      </div>

      {hasItemModifiers && renderModifierHeader()}
      {hasItemModifiers && renderModifier()}

      <AddToOrder
        price={item.price}
        handleQuantityChange={setQuantityToAdd}
        onClick={() => {
          dispatch({
            type: "ADD_ITEM",
            item: { ...item, quantity: quantityToAdd },
          });
          closeAfterPopoverAdding();
        }}
        quantityToAdd={quantityToAdd}
      />
    </div>
  );
};

export default ItemDetails;
