import React from "react";
import { render, cleanup } from "@testing-library/react";

import Badge from "./";

afterEach(cleanup);

describe("Badge", () => {
  test("renders with default background color", () => {
    const { getByText } = render(<Badge>Test</Badge>);
    const badgeElement = getByText("Test");

    expect(badgeElement.style.background).toBe("rgb(79, 55, 47)");
  });

  test("renders with provided background color", () => {
    const customColor = "rgb(18, 52, 86)";
    const { getByText } = render(<Badge background={customColor}>Test</Badge>);
    const badgeElement = getByText("Test");

    expect(badgeElement.style.backgroundColor).toBe(customColor);
  });
});
