import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import History from './History';

describe('History component', () => {
  it('should render History component', () => {
    render(<History />);
    const historyElement = screen.getByTestId('history');
    expect(historyElement).toBeInTheDocument();
  });
});
