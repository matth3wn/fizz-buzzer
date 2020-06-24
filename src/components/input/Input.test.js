import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import Input from "./Input";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders without crashing", () => {
  act(() => {
    render(<Input />, container);
    expect(container.textContent).toBe(
      "Please enter a fizz and buzz time in seconds. Values should be 2 to 10 inclusive.Fizz:Buzz:Go to Timer > "
    );
  });
});

it("should have default values of 2 and 10", () => {
  act(() => {
    const input = render(<Input />, container);
    expect(input.state.minNum).toBe(2);
    expect(input.state.maxNum).toBe(10);
  });
});
