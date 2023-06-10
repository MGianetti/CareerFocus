import React from "react";
import { render, screen } from "@testing-library/react";
import OptionDetails from "./option-details";

describe("OptionDetails", () => {
  beforeEach(() => {
    render(<OptionDetails>Hello Jest</OptionDetails>);
  });

  it("should render without errors", () => {});

  it("should render correctly on the screen", () => {
    const testContent = "Hello Jest";
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
