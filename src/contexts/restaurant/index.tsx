import React, { createContext, useContext, useReducer, useEffect } from "react";

import { Restaurant } from "../../services/restaurants/restaurantTypes";
import { Menu } from "../../services/menu/menuTypes";

import { fetchMenu, fetchRestaurant } from "../../services";

type State = {
  restaurant: Restaurant | null;
  menu: Menu | null;
};

type Action =
  | { type: "SET_RESTAURANT"; payload: Restaurant }
  | { type: "SET_MENU"; payload: Menu };

const initialState: State = {
  restaurant: null,
  menu: null,
};

const DataContext = createContext<[State, React.Dispatch<Action>]>([
  initialState,
  () => null,
]);

const dataReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_RESTAURANT":
      return { ...state, restaurant: action.payload };
    case "SET_MENU":
      return { ...state, menu: action.payload };
    default:
      throw new Error(`Unhandled action type`);
  }
};

export const RestaurantProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      const venueData = await fetchRestaurant(
        "0453ad6e-f530-4864-b101-a7fba4980012"
      );
      dispatch({ type: "SET_RESTAURANT", payload: venueData });

      const menuData = await fetchMenu("a27e98a8-fe59-4623-be70-b9ac4a3254a7");
      dispatch({ type: "SET_MENU", payload: menuData });
    };

    fetchData();
  }, []);
  console.log({ state });

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => {
  const context = useContext(DataContext);
  if (context === undefined) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};
