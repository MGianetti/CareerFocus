import React from "react";
import { render, screen } from "@testing-library/react";
import MenuOption from ".";

describe("MenuOption", () => {
  beforeEach(() => {
    render(<MenuOption>Hello Jest</MenuOption>);
  });

  it("should render without errors", () => {});

  it("should render correctly on the screen", () => {
    const testContent = "Hello Jest";
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
