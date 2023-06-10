import PlanetCard from '@/components/PlanetCard';
import Title from '@/components/Title';
import planets from '@/data/planets';

export default function SolarSystem() {
  return (
    <div data-testid='solar-system'>
      <Title headline='Planetas' />
      <ul>
        {planets.map(({ name, image }) =>
          <PlanetCard planetImage={image} planetName={name} key={name} />
        )}
      </ul>
    </div>
  );
}
