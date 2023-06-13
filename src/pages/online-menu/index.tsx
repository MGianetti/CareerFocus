import React from "react";
import {
  Collapser,
  InputSearch,
  MenuNav,
  MenuOption,
  NavBar,
} from "@components";
import { MainLayout } from "@layouts";
import { useResponsiveness } from "@contexts/responsiveness";
import {
  chartWrapperStyles,
  menuNavWrapperSmStyles,
  menuNavWrapperStyles,
  wrapperStyles,
} from "./online-menu.styles";

const OnlineMenu: React.FC = () => {
  const { isSmall } = useResponsiveness();

  isSmall;

  return (
    <>
      <NavBar
        options={[
          { label: "Menu", href: "/menu" },
          { label: "Entrar", href: "/entrar" },
          { label: "Contato", href: "/contato" },
        ]}
      />
      <MainLayout>
        <InputSearch placeholder="Search menu items" />
        <div style={wrapperStyles}>
          <div style={isSmall ? menuNavWrapperSmStyles : menuNavWrapperStyles}>
            <MenuNav
              options={[
                { label: "Burguers", src: "/src/assets/burguerOption.png" },
                { label: "Drinks", src: "/src/assets/drinksOption.png" },
                { label: "Desserts", src: "/src/assets/dessertsOption.png" },
              ]}
            />
            {[
              { label: "Burguers", src: "/src/assets/hardCoreBurguer.png" },
              { label: "Drinks", src: "/src/assets/hardCoreBurguer.png" },
              { label: "Desserts", src: "/src/assets/hardCoreBurguer.png" },
            ].map((menuOption) => {
              const { label, src } = menuOption;
              return (
                <Collapser category={label}>
                  <MenuOption
                    title={"Hardcore"}
                    description={
                      "180g angus beef burger, plus ribs, gruyere cheese..."
                    }
                    price={"R$33,00"}
                    imgSrc={src}
                  />
                </Collapser>
              );
            })}
          </div>
          {isSmall ? null : <div style={chartWrapperStyles}></div>}
        </div>
      </MainLayout>
    </>
  );
};

export default OnlineMenu;
