export interface Image {
  id: number;
  image: string;
}

export interface ModifierItem {
  id: number;
  name: string;
  price: number;
  maxChoices: number;
  position: number;
  visible: number;
  availabilityType: string;
  available: boolean;
}

export interface Modifier {
  id: number;
  name: string;
  minChoices: number;
  maxChoices: number;
  items: ModifierItem[];
}

export interface MenuItem {
  id: number;
  name: string;
  description: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  sku: string;
  modifiers?: Modifier[];
  images: Image[];
  available: boolean;
}

export interface Section {
  id: number;
  name: string;
  description: string | null;
  position: number;
  visible: number;
  images: Image[];
  items: MenuItem[];
}

export interface Menu {
  id: number;
  name: string;
  type: string;
  collapse: number;
  sections: Section[];
}
