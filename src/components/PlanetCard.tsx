import Image from 'next/image';

export interface PropPlanetCard {
  planetName: string;
  planetImage: any;
}

export default function PlanetCard(props: PropPlanetCard) {
  const { planetName, planetImage } = props;

  return (
    <li data-testid='planet-card' className='mb-80'>
      <Image
        src={planetImage}
        alt={planetName}
        height={300}
        width={300}
      />
      <p className='mt-10 text-2xl'>{planetName}</p>
    </li>
  );
}
