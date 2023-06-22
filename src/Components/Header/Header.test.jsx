import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Header from '.';

describe('header', () => {
  it('should render header', () => {
    render(<Header />);

    let header = screen.getByTestId('header-h1');
    expect(header).toHaveTextContent('RESTy');
  });
});



