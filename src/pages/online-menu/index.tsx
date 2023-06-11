import React from "react";
import InputSearch from "@components/input-search";
import NavBar from "@components/nav-bar";
import MenuNav from "@components/menu-nav";
import Collapser from "@components/collapser";
import MenuOption from "@components/menu-option";

const OnlineMenu: React.FC = () => {
  return (
    <>
      <NavBar />
      <InputSearch />
      <MenuNav />
      <Collapser>
        <MenuOption />
        <MenuOption />
        <MenuOption />
      </Collapser>
      <Collapser>
        <MenuOption />
        <MenuOption />
        <MenuOption />
        <MenuOption />
      </Collapser>
      <Collapser>
        <MenuOption />
        <MenuOption />
        <MenuOption />
        <MenuOption />
      </Collapser>
      <Collapser></Collapser>
    </>
  );
};

export default OnlineMenu;
