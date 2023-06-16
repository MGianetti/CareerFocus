import React from "react";
import { render, fireEvent } from "@testing-library/react";

import IconButton from "./";

describe("IconButton", () => {
  test("renders without crashing", () => {
    const { getByRole } = render(<IconButton icon="add" onClick={() => {}} />);
    const buttonElement = getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("onClick prop is called when clicked", () => {
    const mockOnClick = jest.fn();
    const { getByRole } = render(
      <IconButton icon="add" onClick={mockOnClick} />
    );
    const buttonElement = getByRole("button");

    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
  test.each([
    ["add", "AddIcon"],
    ["chevron", "ChevronIcon"],
    ["close", "CloseIcon"],
    ["hamburguer", "HamburgerIcon"],
    ["remove", "RemoveIcon"],
    ["search", "SearchIcon"],
  ])(
    'correct icon is displayed for icon prop value of "%s"',
    (icon, expectedIconName) => {
      const { getByLabelText } = render(
        <IconButton icon={icon} onClick={() => {}} />
      );
      const iconElement = getByLabelText(`${icon}`);

      expect(iconElement).toBeInTheDocument();
    }
  );
});
