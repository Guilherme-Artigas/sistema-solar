import Image from 'next/image';

export interface PropPlanetCard {
  planetName: string;
  planetImage: any;
}

export default function PlanetCard(props: PropPlanetCard) {
  const { planetName, planetImage } = props;

  return (
    <li data-testid='planet-card'>
      <p>{planetName}</p>
      <Image
        src={planetImage}
        alt={planetName}
        height={250}
        width={250}
      />
    </li>
  );
}
