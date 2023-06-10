import React from "react";
import { render, screen } from "@testing-library/react";
import DetailsOption from ".";

describe("DetailsOption", () => {
  beforeEach(() => {
    render(<DetailsOption>Hello Jest</DetailsOption>);
  });

  it("should render without errors", () => {});

  it("should render correctly on the screen", () => {
    const testContent = "Hello Jest";
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
