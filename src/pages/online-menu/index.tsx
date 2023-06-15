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
  wrapperSmStyles,
  wrapperStyles,
} from "./online-menu.styles";
import Popover from "@components/pop-over";
import ItemDetails, { ItemDetailsProp } from "@pages/item-details";
import Basket from "@pages/basket";
import { useData } from "@contexts/restaurant";
import { useBasket } from "@contexts/basket";

const imgsFallback = [
  "/src/assets/burguerOption.png",
  "/src/assets/drinksOption.png",
  "/src/assets/dessertsOption.png",
];

const OnlineMenu: React.FC = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const [popoverContent, setPopoverContent] = useState<JSX.Element | null>(
    null
  );
  const { isSmall } = useResponsiveness();
  const [{ restaurant, menu }] = useData();
  const { state, dispatch } = useBasket();

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

  const handleMenuOptionClick = (item: ItemDetailsProp) => () => {
    setIsPopoverOpen(true);
    setPopoverContent(
      <ItemDetails
        item={item}
        onAddToBasket={() => dispatch({ type: "ADD_ITEM", item })}
      />
    );
  };

  return (
    <>
      {renderNavBar()}
      <MainLayout isLoading={isLoading}>
        {!isLoading && renderInputSearch()}

        <div style={isSmall ? wrapperSmStyles : wrapperStyles}>
          <div style={isSmall ? menuNavWrapperSmStyles : menuNavWrapperStyles}>
            {!isLoading && renderMenuNav()}
            <Popover
              isOpen={isPopoverOpen}
              onClose={() => setIsPopoverOpen(false)}
            >
              {popoverContent}
            </Popover>
            {!isLoading &&
              menu?.sections.map((section) => {
                return (
                  <Collapser category={section.name} id={`${section.name}-key`}>
                    {section.items.map((item) => (
                      <MenuOption
                        title={item.name}
                        id={item.id}
                        description={item.description}
                        price={item.price}
                        imgSrc={item?.images?.find(() => true)?.image}
                        isPopoverOpen={isPopoverOpen}
                        onClick={handleMenuOptionClick(item as ItemDetailsProp)}
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
