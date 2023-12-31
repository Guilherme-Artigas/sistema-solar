import PlanetCard from '@/components/PlanetCard';
import Title from '@/components/Title';
import planets from '@/data/planets';

export default function SolarSystem() {
  return (
    <div data-testid='solar-system' className='text-center'>
      <Title headline='PLANETAS' />
      <ul className='md:flex md:mt-5'>
        {planets.map(({ name, image }) =>
          <PlanetCard planetImage={image} planetName={name} key={name} />
        )}
      </ul>
    </div>
  );
}
