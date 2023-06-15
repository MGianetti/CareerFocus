import AddToOrder from "./add-to-order";
import {
  detailsWraperStyles,
  headingParagraphStyles,
  headingStyles,
  imgStyles,
  modifierHeadingStyles,
  modifierParagraphStyles,
  modifierWrapperStyles,
  subDetailsWrapperStyles,
  subHeadingParagraphStyles,
  subHeadingStyles,
  wrapperStyles,
  checkboxStyles,
} from "./item-details.styles";

interface Image {
  id: number;
  image: string;
}

interface ItemDetailsProp {
  id: number;
  name: string;
  description: string;
  alcoholic: number;
  price: number;
  position: number;
  visible: number;
  availabilityType: string;
  available: boolean;
  sku: string;
  images: Image[];
  quantity: number;
}

const ItemDetails: React.FC<ItemDetailsProp> = (props) => {
  const { item } = props;
  console.log({ item });

  const a = {
    id: 1625701,
    name: "Hard Core",
    description:
      "180g angus beef burger, with shredded ribs, gruyere cheese, caramelized onions, lettuce, confit tomato, special house bread, served with fried cassava and passion fruit chipotle.",
    alcoholic: 0,
    price: 33,
    position: 0,
    visible: 1,
    availabilityType: "AVAILABLE_NOW",
    sku: "I1625701",
    images: [
      {
        id: 108305,
        image:
          "https://preodemo.gumlet.io/usr/venue/7602/menuItem/646fbdc8cecca.png",
      },
    ],
    available: true,
  };

  const renderModifier = () => (
    <div style={modifierWrapperStyles}>
      <div>
        <h1 style={modifierHeadingStyles}>Smash</h1>
        <p style={modifierParagraphStyles}>Lorem ipsum dolor amet</p>
      </div>

      <input style={checkboxStyles} type="checkbox" />
    </div>
  );

  return (
    <div style={wrapperStyles} key={item.name}>
      <img style={imgStyles} src={item.images[0].image} />
      <div style={detailsWraperStyles}>
        <h1 style={headingStyles}>{item.name}</h1>
        <p style={headingParagraphStyles}>{item.description}</p>
      </div>
      <div style={subDetailsWrapperStyles}>
        <h1 style={subHeadingStyles}>Smash</h1>
        <p style={subHeadingParagraphStyles}>Lorem ipsum dolor amet</p>
      </div>

      <AddToOrder />
    </div>
  );
};

export default ItemDetails;
