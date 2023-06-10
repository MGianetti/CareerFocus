import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from ".";

describe("NavBar", () => {
  beforeEach(() => {
    render(<NavBar>Hello Jest</NavBar>);
  });

  it("should render without errors", () => {});

  it("should render correctly on the screen", () => {
    const testContent = "Hello Jest";
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
