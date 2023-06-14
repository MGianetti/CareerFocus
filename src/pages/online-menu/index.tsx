import React, { useState } from "react";
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
  basketWrapperStyles,
  menuNavWrapperSmStyles,
  menuNavWrapperStyles,
  wrapperStyles,
} from "./online-menu.styles";
import Popover from "@components/pop-over";
import ItemDetails from "@pages/item-details";
import Basket from "@pages/basket";
import { useData } from "@contexts/restaurant";

const imgsFallback = [
  "/src/assets/burguerOption.png",
  "/src/assets/drinksOption.png",
  "/src/assets/dessertsOption.png",
];

const OnlineMenu: React.FC = () => {
  const [isPopoverOpen, setIsPropoverOpen] = useState(false);
  const { isSmall } = useResponsiveness();
  const [{ restaurant, menu }] = useData();

  const isLoading = restaurant === null || menu === null;

  const sectionsMenu = menu?.sections.map((section, index) => {
    return { label: section?.name, src: imgsFallback[index] };
  });

  const renderNavBar = () => (
    <NavBar
      options={[
        { label: "Menu", href: "/menu" },
        { label: "Entrar", href: "/entrar" },
        { label: "Contato", href: "/contato" },
      ]}
    />
  );

  const renderInputSearch = () => (
    <InputSearch placeholder="Search menu items" />
  );

  const renderMenuNav = () => {
    return <MenuNav options={sectionsMenu} />;
  };

  console.log(menu?.sections[0].items);

  return (
    <>
      <Popover isOpen={isPopoverOpen} onClose={() => setIsPropoverOpen(false)}>
        <ItemDetails />
      </Popover>
      {renderNavBar()}
      <MainLayout isLoading={isLoading}>
        {!isLoading && renderInputSearch()}

        <div style={wrapperStyles}>
          <div style={isSmall ? menuNavWrapperSmStyles : menuNavWrapperStyles}>
            {!isLoading && renderMenuNav()}
            {!isLoading &&
              menu?.sections.map((section) => {
                return (
                  <Collapser category={section.name} id={`${section.name}-key`}>
                    {section.items.map((item) => (
                      <MenuOption
                        title={item.name}
                        description={item.description}
                        price={item.price}
                        imgSrc={item?.images?.find(() => true)?.image}
                        isPopoverOpen={isPopoverOpen}
                        onClick={() => setIsPropoverOpen(true)}
                      />
                    ))}
                  </Collapser>
                );
              })}
          </div>
          {isSmall ? null : (
            <div style={basketWrapperStyles}>
              <Basket />
            </div>
          )}
        </div>
      </MainLayout>
    </>
  );
};

export default OnlineMenu;
