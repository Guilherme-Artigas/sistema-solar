import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../src/pages/index';
import Missions from '../src/components/Missions';

describe('<Missions />', () => {
  it('O componente <Missions /> existe:', () => {
    render(<Missions />);
  });

  it('O componente <Missions /> tem o data-testid=missions:', () => {
    render(<Missions />);

    const divMissions = screen.getByTestId(/missions/i);

    expect(divMissions).toBeInTheDocument();
  });

  it('O componente <Missions /> deve ser renderizado dentro de home:', () => {
    render(<Home />);

    const divMissions = screen.getByTestId(/missions/i);

    expect(divMissions).toBeInTheDocument();
  });
});
