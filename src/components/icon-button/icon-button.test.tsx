import React from "react";
import { render, screen } from "@testing-library/react";
import IconButton from "./icon-button";

describe("IconButton", () => {
  beforeEach(() => {
    render(<IconButton>Hello Jest</IconButton>);
  });

  it("should render without errors", () => {});

  it("should render correctly on the screen", () => {
    const testContent = "Hello Jest";
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
