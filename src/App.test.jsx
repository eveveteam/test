import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('<App />', () => {
  it('should render the app', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Eveve React Test/i);
    expect(linkElement).toBeInTheDocument();
  });
});
