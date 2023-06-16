interface Image {
  id: number;
  image: string;
}

export interface ItemModifier {
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

export interface ItemDetailsProps {
  item: ItemDetailsProp;
  closeAfterPopoverAdding: () => void;
}
