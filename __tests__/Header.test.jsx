import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';

describe('<Header />', () => {
  it('O texto "Sistema Solar" está sendo renderizado na tela:', () => {
    render(<Home />);

    const TITLE = screen.getByRole('heading', { name: /Sistema Solar/i });

    expect(TITLE).toBeInTheDocument();
  });
});
