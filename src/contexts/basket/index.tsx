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

type Action =
  | { type: "ADD_ITEM"; item: BasketItem }
  | { type: "REMOVE_ITEM"; itemId: number }
  | { type: "UPDATE_ITEM"; itemId: number; quantity: number }
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
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return { ...state, items: [...state.items, action.item] };

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.itemId),
      };
    case "UPDATE_ITEM":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.itemId
            ? { ...item, quantity: action.quantity }
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
}>({ state: initialState, dispatch: () => null });

type ProviderProps = {
  children: ReactNode;
};

export const BasketProvider: React.FC<ProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BasketContext.Provider value={{ state, dispatch }}>
      {children}
    </BasketContext.Provider>
  );
};

export const useBasket = () => useContext(BasketContext);
