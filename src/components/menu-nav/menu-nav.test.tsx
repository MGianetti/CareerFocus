import React from "react";
import { render, screen } from "@testing-library/react";
import MenuNav from "./menu-nav";

describe("MenuNav", () => {
  beforeEach(() => {
    render(<MenuNav>Hello Jest</MenuNav>);
  });

  it("should render without errors", () => {});

  it("should render correctly on the screen", () => {
    const testContent = "Hello Jest";
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
