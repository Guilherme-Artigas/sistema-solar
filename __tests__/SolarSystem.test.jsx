import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';
import SolarSystem from '../src/components/SolarSystem';

describe('<SolarSystem />', () => {
  it('Componente <SolarSystem /> existe:', () => {
    render(<SolarSystem />);
  });

  it('Componente <SolarSystem /> possui data-testid="solar-system":', () => {
    render(<SolarSystem />);

    const divSolarSystem = screen.getByTestId('solar-system');

    expect(divSolarSystem).toBeInTheDocument();
  });

  it('Componente <SolarSystem /> é renderizado no componente principal:', () => {
    render(<Home />);

    const divSolarSystem = screen.getByTestId('solar-system');

    expect(divSolarSystem).toBeInTheDocument();
  });
});
