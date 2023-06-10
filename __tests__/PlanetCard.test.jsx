import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import PlanetCard from '../src/components/PlanetCard';
import SolarSystem from '../src/components/SolarSystem';
import planets from '../src/data/planets';

describe('<PlanetCard />', () => {
  it('O componente <PlanetCard /> existe:', () => {
    const { name, image } = planets[2];
    render(<PlanetCard planetImage={image} planetName={name} />);
  });

  it('O componente <PlanetCard /> possui o "data-testid=planet-card":', () => {
    const { name, image } = planets[2];
    render(<PlanetCard planetImage={image} planetName={name} />);

    const itemList = screen.getByTestId('planet-card');

    expect(itemList).toBeInTheDocument();
  });

  it('O componente <PlanetCard /> renderiza o texto recebido pela prop planetName:', () => {
    const { name, image } = planets[2];

    render(<PlanetCard planetImage={image} planetName={name} />);

    const planetName = screen.getByText(/terra/i);

    expect(planetName).toBeInTheDocument();
  });

  it('O componente <PlanetCard /> renderiza a imagem recebida pela prop planetImage:', () => {
    const { name, image } = planets[2];

    render(<PlanetCard planetImage={image} planetName={name} />);

    const planetImg = screen.getByRole('img');

    expect(planetImg).toBeInTheDocument();
    expect(planetImg).toHaveAttribute('src');
  });

  it('O componente <PlanetCard /> renderiza o atributo alt recebido pela prop planetName:', () => {
    const { name, image } = planets[2];

    render(<PlanetCard planetImage={image} planetName={name} />);

    const alt = screen.getByRole('img');

    expect(alt).toBeInTheDocument();
    expect(alt).toHaveAttribute('alt', name);
  });

  it('Deve ser renderizado um componente <PlanetCard /> para cada planeta da lista:', () => {
    render(<SolarSystem />);

    const planetCardsList = screen.getAllByTestId('planet-card');

    expect(planetCardsList).toHaveLength(8);
  });

  it('Todos os planetas devem estar sendo listados na tela:', async () => {
    render(<SolarSystem />);

    const planetCardsList = screen.getAllByTestId('planet-card');

    planetCardsList.forEach((planet, index) => {
      expect(planet).toHaveTextContent(planets[index].name);
    });
  });
});
