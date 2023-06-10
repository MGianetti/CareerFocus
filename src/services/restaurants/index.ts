import { Restaurant } from "./restaurantTypes";

// @ts-ignore
import { BASE_URL } from "../services.constants";

export const fetchRestaurant = async (
  restaurantId: string
): Promise<Restaurant> => {
  const response = await fetch(`${BASE_URL}/${restaurantId}`);

  if (!response.ok) {
    throw new Error(
      `Error while fetching restaurant data: HTTP ${response.status} - ${response.statusText}`
    );
  }

  const restaurant: Restaurant = await response.json();
  return restaurant;
};
