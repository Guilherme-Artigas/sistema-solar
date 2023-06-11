import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header';
import Home from '../src/pages/index';

describe('<Header />', () => {
  it('Componente <Header /> deve ser renderizado na tela:', () => {
    render(<Header />);
  });

  it('Componente <Header /> deve conter uma tag "header":', () => {
    render(<Header />);

    const tagHeader = screen.getByRole('banner');

    expect(tagHeader).toBeInTheDocument();
  });

  it('Componente <Header /> deve ter uma tag "h1": ', () => {
    render(<Header />);

    const logoHeader = screen.getByTestId('logo-sistema-solar');

    expect(logoHeader).toBeInTheDocument();
  });
});
