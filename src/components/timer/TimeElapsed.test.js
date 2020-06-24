import React from 'react';
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import TimeElapsed from "./TimeElapsed";

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

it('renders with and without timeElapsed props', () => {
    act(() => {
        render(<TimeElapsed />, container)
      })
      expect(container.textContent).toBe("NaN:NaN:NaN");
  
  act(() => {
    render(<TimeElapsed timeElapsed={360000} />, container)
  })
  expect(container.textContent).toBe("0:06:00");

  act(() => {
    render(<TimeElapsed timeElapsed={406999}/>, container)
  })
  expect(container.textContent).toBe("0:06:46");

  act(() => {
    render(<TimeElapsed timeElapsed={10000000}/>, container)
  })
  expect(container.textContent).toBe("2:46:40");
});