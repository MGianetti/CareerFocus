import { Restaurant } from "./restaurantTypes";

import { BASE_URL } from "../services.constants";

const fetchRestaurant = async (restaurantId: string): Promise<Restaurant> => {
  const response = await fetch(`${BASE_URL}/${restaurantId}`);

  if (!response.ok) {
    throw new Error(
      `Error while fetching restaurant data: HTTP ${response.status} - ${response.statusText}`
    );
  }

  const restaurant: Restaurant = await response.json();
  return restaurant;
};

export default fetchRestaurant;
