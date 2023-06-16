import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";

import MenuNav from "./";
import {
  menuItemSelectedStyles,
  menuItemStyles,
  menuNavStyles,
} from "./menu-nav.styles";

describe("MenuNav", () => {
  it("should render the correct number of menu items", () => {
    const options = [
      { label: "Option 1", src: "img1.jpg" },
      { label: "Option 2", src: "img2.jpg" },
      { label: "Option 3", src: "img3.jpg" },
    ];

    render(<MenuNav options={options} />);

    const menuItemElements = screen.getAllByRole("listitem");
    expect(menuItemElements).toHaveLength(options.length);
  });

  it("should render the correct labels for each option", () => {
    const options = [
      { label: "Option 1", src: "img1.jpg" },
      { label: "Option 2", src: "img2.jpg" },
      { label: "Option 3", src: "img3.jpg" },
    ];

    render(<MenuNav options={options} />);

    options.forEach((option) => {
      expect(screen.getByText(option.label)).toBeInTheDocument();
    });
  });

  test("clicking an item changes the selected option", () => {
    const options = [
      { label: "Option 1", src: "img1.jpg" },
      { label: "Option 2", src: "img2.jpg" },
      { label: "Option 3", src: "img3.jpg" },
    ];

    render(<MenuNav options={options} />);

    const firstItem = screen.getByText(options[0].label);
    const secondItem = screen.getByText(options[1].label);

    // Default selected item should be the first one
    expect(firstItem.parentElement).toHaveStyle(
      menuItemSelectedStyles as string | Record<string, unknown>
    );

    // Click on the second item
    fireEvent.click(secondItem);

    // Now, the second item should be selected
    expect(secondItem.parentElement).toHaveStyle(
      menuItemSelectedStyles as string | Record<string, unknown>
    );
    expect(firstItem.parentElement).not.toHaveStyle(
      menuItemSelectedStyles as string | Record<string, unknown>
    );
  });
});
