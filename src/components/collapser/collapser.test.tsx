import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Collapser from "./";

describe("<Collapser/>", () => {
  const category = "Test Category";
  const children = <div>Test Children</div>;

  it("should render correctly with category name", () => {
    const { getByText } = render(
      <Collapser id={"key"} category={category}>
        {children}
      </Collapser>
    );
    expect(getByText(category)).toBeInTheDocument();
  });

  it("should toggle isOpen state on click", () => {
    const { getByText, queryByText } = render(
      <Collapser id={"key"} category={category}>
        {children}
      </Collapser>
    );
    expect(getByText("Test Children")).toBeInTheDocument();
    fireEvent.click(getByText(category));
    expect(queryByText("Test Children")).toBeNull();
  });
});
