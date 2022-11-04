/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import EightBall from './eightball';

import * as random from './random';
random.choice = jest.fn();

const answers = [
  { msg: 'No', color: 'red' }
];

it('renders initially', () => {
  let { getByText } = render(
    <EightBall answers={answers} />
  );

  expect(getByText("Yes")).not.toBeInTheDocument();
  expect(getByText("Think of a Question.")).toBeInTheDocument();
});

it('changes on click', () => {
  random.choice
    .mockReturnValueOnce({msg: "Yes", color: 'red'})
    .mockReturnValueOnce({ msg: 'Maybe', color: 'pink' });

    let { container, getByText, queryByText } = render(
      <EightBall answers={ answers }/>
    );

    fireEvent.click(container.querySelector(".Eightball"));

    expect(getByText("Yes")).toBeInTheDocument();
    expect(queryByText("Think of a Question.")).not.toBeInTheDocument();

    fireEvent.click(container.querySelector(".Eightball"));

    expect(getByText("Maybe")).toBeInTheDocument();
    expect(queryByText("Yes")).not.toBeInTheDocument();
})