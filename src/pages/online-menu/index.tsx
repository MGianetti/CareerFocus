import React, { useEffect, useState } from "react";

import {
  Collapser,
  InputSearch,
  MenuNav,
  MenuOption,
  NavBar,
} from "@components";
import { MainLayout } from "@layouts";
import { useResponsiveness } from "@contexts/responsiveness";
import Popover from "@components/pop-over";
import ItemDetails, { ItemDetailsProp } from "@pages/item-details";
import Basket from "@pages/basket";
import { useData } from "@contexts/restaurant";
import AddToOrder from "@pages/item-details/add-to-order";

import {
  basketWrapperStyles,
  menuNavWrapperSmStyles,
  menuNavWrapperStyles,
  wrapperSmStyles,
  wrapperStyles,
  lastOptionStyles,
} from "./online-menu.styles";

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

  const handleMenuOptionClick = (item: ItemDetailsProp) => () => {
    setPopoverContent(
      <ItemDetails
        item={item}
        closeAfterPopoverAdding={() => setIsPopoverOpen(false)}
      />
    );
    setIsPopoverOpen(true);
  };

  const handleMyBasketClick = () => {
    setPopoverContent(<Basket />);
    setIsPopoverOpen(true);
  };

  useEffect(() => {
    if (typeof popoverContent === typeof (<Basket />) && !isSmall) {
      setIsPopoverOpen(false);
      setPopoverContent(null);
    }
  }, [isSmall]);

  const renderInputSearch = () => (
    <InputSearch placeholder="Search menu items" />
  );

  const renderMenuNav = () => {
    return <MenuNav options={sectionsMenu} />;
  };

  const renderMenuOptions = () =>
    !isLoading &&
    menu?.sections.map((section, sectionIndex) => {
      const isLastOption = sectionIndex + 1 === menu.sections?.length;
      return (
        <>
          <Collapser category={section.name} id={`${section.name}-key`}>
            {section.items.map((item) => {
              return (
                <>
                  <MenuOption
                    title={item.name}
                    id={item.id}
                    description={item.description}
                    price={item.price}
                    imgSrc={item?.images?.find(() => true)?.image}
                    isPopoverOpen={isPopoverOpen}
                    onClick={handleMenuOptionClick(item as ItemDetailsProp)}
                  />
                </>
              );
            })}
          </Collapser>
          {isLastOption && <div style={lastOptionStyles} />}
        </>
      );
    });

  const renderPopoverWithContent = () => (
    <Popover
      isOpen={isPopoverOpen}
      onClose={() => {
        setPopoverContent(null);
        setIsPopoverOpen(false);
      }}
    >
      {popoverContent}
    </Popover>
  );

  const renderAddToOrderFooterOnMobile = () => (
    <AddToOrder
      isPopOverClosed={!isPopoverOpen}
      onClickYourBasket={handleMyBasketClick}
    />
  );

  const renderBasketOnPc = () => (
    <div style={basketWrapperStyles}>
      <Basket />
    </div>
  );

  return (
    <>
      {renderNavBar()}
      <MainLayout isLoading={isLoading}>
        {!isLoading && renderInputSearch()}

        <div style={isSmall ? wrapperSmStyles : wrapperStyles}>
          <div style={isSmall ? menuNavWrapperSmStyles : menuNavWrapperStyles}>
            {!isLoading && renderMenuNav()}
            {renderPopoverWithContent()}
            {renderMenuOptions()}
          </div>

          {isSmall && !isPopoverOpen
            ? renderAddToOrderFooterOnMobile()
            : renderBasketOnPc()}
        </div>
      </MainLayout>
    </>
  );
};

export default OnlineMenu;
