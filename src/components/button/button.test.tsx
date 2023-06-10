import React from "react";
import { render, screen } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
  beforeEach(() => {
    render(<Button>Hello Jest</Button>);
  });

  it("should render without errors", () => {});

  it("should render correctly on the screen", () => {
    const testContent = "Hello Jest";
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
