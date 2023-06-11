import React from "react";
import { render, screen } from "@testing-library/react";
import OrderingMenu from "./ordering-menu";

describe("OrderingMenu", () => {
  beforeEach(() => {
    render(<OrderingMenu>Hello Jest</OrderingMenu>);
  });

  it("should render without errors", () => {});

  it("should render correctly on the screen", () => {
    const testContent = "Hello Jest";
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
