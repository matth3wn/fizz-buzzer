import React from "react";
import { render } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Timer from './Timer';

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('should render without crashing', () => {
  act(() => {
    render(<Timer />, container);
  });
  const back = container.querySelector('button');
  const input1 = container.querySelector('#start');
  const input2 = container.querySelector('#reset');
  expect(input1.textContent).toBe('Start');
  expect(input2.textContent).toBe('Stop / Reset');
  expect(back.textContent).toBe('< Set Times');
});