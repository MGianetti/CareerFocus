import React from "react";
import { render, fireEvent } from "@testing-library/react";

import InputSearch from "./";

describe("InputSearch", () => {
  it("should render without crashing", () => {
    const { getByPlaceholderText } = render(
      <InputSearch placeholder="Search here" />
    );
    const inputElement = getByPlaceholderText("Search here");
    expect(inputElement).toBeInTheDocument();
  });

  it("should initial value is empty", () => {
    const { getByPlaceholderText } = render(
      <InputSearch placeholder="Search here" />
    );
    const inputElement = getByPlaceholderText("Search here");
    expect(inputElement.value).toBe("");
  });

  it("should value changes when typing", () => {
    const { getByPlaceholderText } = render(
      <InputSearch placeholder="Search here" />
    );
    const inputElement = getByPlaceholderText("Search here");

    fireEvent.change(inputElement, { target: { value: "React" } });
    expect(inputElement.value).toBe("React");
  });
});
