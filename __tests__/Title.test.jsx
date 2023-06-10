import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SolarSystem from '../src/components/SolarSystem';
import Title from '../src/components/Title';

describe('<Title />', () => {
  it('O componente <Title /> existe:', () => {
    render(<Title />);
  });

  it('O componente <Title /> renderiza uma tag h2:', () => {
    render(<Title />);

    const titleH2 = screen.getByRole('heading', { level: 2 });

    expect(titleH2).toBeInTheDocument();
  });

  it('O componente <Title /> renderiza o texto passado por props:', () => {
    render(<Title headline='Planetas' />);

    const textTitle = screen.getByRole('heading', { level: 2 });

    expect(textTitle).toHaveTextContent(/Planetas/i);
  });
});
