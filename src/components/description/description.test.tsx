import React from "react";
import { render, screen } from "@testing-library/react";
import Description from ".";

describe("Description", () => {
  beforeEach(() => {
    render(<Description>Hello Jest</Description>);
  });

  it("should render without errors", () => {});

  it("should render correctly on the screen", () => {
    const testContent = "Hello Jest";
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
