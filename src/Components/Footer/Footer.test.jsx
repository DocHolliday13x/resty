import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('footer', () => {
  it('should render footer', () => {
    render(<Footer />);

    let footer = screen.getByTestId('footer');
    expect(footer).toHaveTextContent(`© Uncle Buzz's Basement 2023`);
  });
});



