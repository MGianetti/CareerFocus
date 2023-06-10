import { Menu } from "./menuTypes";

// @ts-ignore
import { BASE_URL } from "../services.constants";

export const fetchMenu = async (menuId: string): Promise<Menu> => {
  const response = await fetch(`${BASE_URL}/${menuId}`);

  if (!response.ok) {
    throw new Error(
      `Error while fetching menu data: HTTP ${response.status} - ${response.statusText}`
    );
  }

  const menu: Menu = await response.json();
  return menu;
};
