import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
  test('renders Counter component', () => {
    render(<Counter />);
    const counterElement = screen.getByText(/count/i);
    expect(counterElement).toBeInTheDocument();
  });

  test('increments count on button click', () => {
    render(<Counter />);
    const buttonElement = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(buttonElement);
    const countElement = screen.getByText(/count: 1/i);
    expect(countElement).toBeInTheDocument();
  });

  test('decrements count on button click', () => {
    render(<Counter />);
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    fireEvent.click(incrementButton);
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    fireEvent.click(decrementButton);
    const countElement = screen.getByText(/count: 0/i);
    expect(countElement).toBeInTheDocument();
  });
});