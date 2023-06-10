import React from "react";
import { render, screen } from "@testing-library/react";
import InputSearch from ".";

describe("InputSearch", () => {
  beforeEach(() => {
    render(<InputSearch>Hello Jest</InputSearch>);
  });

  it("should render without errors", () => {});

  it("should render correctly on the screen", () => {
    const testContent = "Hello Jest";
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
