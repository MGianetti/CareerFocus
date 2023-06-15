import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Button from "./";

describe("Button", () => {
  it("should render correctly with children", () => {
    const { getByText } = render(<Button>Click me</Button>);
    expect(getByText("Click me")).toBeInTheDocument();
  });

  it("should handle click event", () => {
    const onClickMock = jest.fn();
    const { getByText } = render(
      <Button onClick={onClickMock}>Click me</Button>
    );
    fireEvent.click(getByText("Click me"));
    expect(onClickMock).toHaveBeenCalled();
  });

  it("should apply correct styles", () => {
    const { getByText } = render(
      <Button backgroundColor="red" width="200px">
        Click me
      </Button>
    );
    const buttonElement = getByText("Click me");

    expect(buttonElement.style.backgroundColor).toBe("red");
    expect(buttonElement.style.width).toBe("200px");
  });
});
