import React from "react";
import { render, screen } from "@testing-library/react";
import Collapser from "./collapser";

describe("Collapser", () => {
  beforeEach(() => {
    render(<Collapser>Hello Jest</Collapser>);
  });

  it("should render without errors", () => {});

  it("should render correctly on the screen", () => {
    const testContent = "Hello Jest";
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
