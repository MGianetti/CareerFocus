import React from "react";
import { render, screen } from "@testing-library/react";
import Main from "./main";

describe("Main", () => {
  beforeEach(() => {
    render(<Main>Hello Jest</Main>);
  });

  it("should render without errors", () => {});

  it("should render correctly on the screen", () => {
    const testContent = "Hello Jest";
    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
