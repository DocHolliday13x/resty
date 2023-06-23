import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('App component integration', () => {

  it('should render the app', async () => {
    render(<App />);

    let method = screen.getByTestId('app-method');
    let url = screen.getByTestId('app-url');
    expect (method).toHaveTextContent('Request Method: ');
    expect (url).toHaveTextContent('URL: ');
  });

  it('should render the app with a form', async () => {
    render(<App />);

    let method = screen.getByTestId('app-method');
    let url = screen.getByTestId('app-url');
    let get = screen.getByTestId('get');
    let inputURL = screen.getByTestId('form-input');
    let button = screen.getByTestId('form-button');
    let results = screen.getByTestId('results-section');

    fireEvent.change(inputURL, { target: { value: 'https://pokeapi.co/api/v2/pokemon' } });
    fireEvent.click(get);
    fireEvent.click(button);

    expect (method).toHaveTextContent('Request Method: GET');
    expect (url).toHaveTextContent('URL: https://pokeapi.co/api/v2/pokemon');
    expect (results).toHaveTextContent('Results: ');
  });

});


