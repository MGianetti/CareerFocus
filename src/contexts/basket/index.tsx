import React, { ReactNode, createContext, useContext, useReducer } from "react";
interface Image {
  id: number;
  image: string;
}

interface BasketItem {
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
  quantity: number;
}

export type Action =
  | { type: "ADD_ITEM"; item: BasketItem }
  | { type: "REMOVE_ITEM"; itemId: number }
  | { type: "UPDATE_ITEM"; itemId: number }
  | { type: "CLEAR" };

interface State {
  items: BasketItem[];
}

const initialState: State = {
  items: [],
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "ADD_ITEM":
      if (state.items.find((item) => item.id === action.item.id)) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.item.id
              ? {
                  ...item,
                  quantity: item.quantity,
                }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.item, quantity: 1 }],
      };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.itemId && item.quantity > 0) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return { ...item, quantity: item.quantity + 1 };
        }),
      };

    case "UPDATE_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

    case "CLEAR":
      return { ...state, items: [] };

    default:
      return state;
  }
}

// Define the context
const BasketContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
  getItemQuantity: (itemId: number) => number;
}>({ state: initialState, dispatch: () => null, getItemQuantity: () => 0 });

type ProviderProps = {
  children: ReactNode;
};

export const BasketProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getItemQuantity = (itemId: number): number => {
    console.log(state.items);

    const item = state.items.find((item) => item.id === itemId);
    const hasQuantity = item?.quantity !== undefined;
    return hasQuantity ? item?.quantity : 0;
  };

  return (
    <BasketContext.Provider value={{ state, dispatch, getItemQuantity }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
