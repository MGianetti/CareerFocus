import React from "react";
import { render, screen } from "@testing-library/react";
import Badge from ".";

describe("Badge", () => {
  beforeEach(() => {
    render(<Badge>Hello Jest</Badge>);
  });

  it("should render without errors", () => {});

  it("should render correctly on the screen", () => {
    const testContent = "Hello Jest";
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
