import { render, cleanup } from "@testing-library/react";

import Badge from "./";

afterEach(cleanup);

describe("Badge", () => {
  test("renders with default background color", () => {
    const { getByText } = render(<Badge>Test</Badge>);
    const badgeElement = getByText("Test");

    expect(badgeElement.style.background).toBe("#4F372F");
  });

  test("renders with provided background color", () => {
    const customColor = "#123456";
    const { getByText } = render(<Badge background={customColor}>Test</Badge>);
    const badgeElement = getByText("Test");

    expect(badgeElement.style.background).toBe(customColor);
  });
});
