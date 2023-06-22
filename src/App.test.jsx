import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import Form from './Components/Form/index.jsx';

describe('results', () => {
  it('should render results', () => {
    render(<App />);

    let method = screen.getByTestId('app-method');
    let url = screen.getByTestId('app-url');
    expect(method).toHaveTextContent('Request Method: ');
    expect(url).toHaveTextContent('URL: ');
  });
});

describe('form', () => {
  it('should render form', () => {
    render(<Form />);

    const get = screen.getByTestId('form-get');
    const post = screen.getByTestId('form-post');

    expect(get).toHaveStyle("background-color: grey");
    expect(post).toHaveStyle("background-color: teal");

    fireEvent.click(post);

    setTimeout(() => {
      expect(get).toHaveStyle("background-color: teal");
      expect(post).toHaveStyle("background-color: grey");
    }, 500);
  });
});




