import React from "react";
import InputSearch from "@components/input-search";
import NavBar from "@components/nav-bar";
import MenuNav from "@components/menu-nav";
import Collapser from "@components/collapser";
import MenuOption from "@components/menu-option";

const OnlineMenu: React.FC = () => {
  return (
    <>
      <NavBar
        options={[
          { label: "Menu", href: "/menu" },
          { label: "Entrar", href: "/entrar" },
          { label: "Contato", href: "/contato" },
        ]}
      />
      {/* <InputSearch placeholder="Search menu items" />
      <MenuNav
        options={[
          { label: "Burguers" },
          { label: "Drinks" },
          { label: "Desserts" },
        ]}
      />
      <Collapser category={"Burguers"}>
        <MenuOption />
        <MenuOption />
        <MenuOption />
      </Collapser>
      <Collapser category={"Drinks"}>
        <MenuOption />
        <MenuOption />
        <MenuOption />
        <MenuOption />
      </Collapser>
      <Collapser category={"Desserts"}>
        <MenuOption />
        <MenuOption />
        <MenuOption />
        <MenuOption />
      </Collapser> */}
    </>
  );
};

export default OnlineMenu;
