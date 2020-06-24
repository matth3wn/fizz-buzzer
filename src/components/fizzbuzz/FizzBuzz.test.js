import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import FizzBuzz from "./FizzBuzz";

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

it('renders with and without inputs props', () => {
  act(() => {
    render(<FizzBuzz />, container)
  })
  expect(container.textContent).toBe("");

  act(() => {
    render(<FizzBuzz inputs={'fizz'} />, container)
  })
  expect(container.textContent).toBe("fizz");

  act(() => {
    render(<FizzBuzz inputs={'buzz'}/>, container)
  })
  expect(container.textContent).toBe("buzz");

  act(() => {
    render(<FizzBuzz inputs={'fizzbuzz'}/>, container)
  })
  expect(container.textContent).toBe("fizzbuzz");
});