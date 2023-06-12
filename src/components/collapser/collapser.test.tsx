import React from "react";
import { render, screen } from "@testing-library/react";
import Collapsible from ".";

describe("Collapsible", () => {
  beforeEach(() => {
    render(<Collapsible>Hello Jest</Collapsible>);
  });

  it("should render without errors", () => {});

  it("should render correctly on the screen", () => {
    const testContent = "Hello Jest";
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
