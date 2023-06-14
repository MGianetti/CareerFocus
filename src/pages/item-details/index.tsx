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

const ItemDetails: React.FC = () => {
  return (
    <div style={wrapperStyles}>
      <img style={imgStyles} src="/src/assets/smashBurguerBanner.png" />
      <div style={detailsWraperStyles}>
        <h1 style={headingStyles}>Smash</h1>
        <p style={headingParagraphStyles}>Lorem ipsum dolor amet</p>
      </div>
      <div style={subDetailsWrapperStyles}>
        <h1 style={subHeadingStyles}>Smash</h1>
        <p style={subHeadingParagraphStyles}>Lorem ipsum dolor amet</p>
      </div>

      <div style={modifierWrapperStyles}>
        <div>
          <h1 style={modifierHeadingStyles}>Smash</h1>
          <p style={modifierParagraphStyles}>Lorem ipsum dolor amet</p>
        </div>

        <input checked={true} style={checkboxStyles} type="checkbox" />
      </div>

      <AddToOrder />
    </div>
  );
};

export default ItemDetails;
