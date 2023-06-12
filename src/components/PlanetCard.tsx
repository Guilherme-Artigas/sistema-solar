import Image from 'next/image';

export interface PropPlanetCard {
  planetName: string;
  planetImage: any;
}

export default function PlanetCard(props: PropPlanetCard) {
  const { planetName, planetImage } = props;

  return (
    <li
      data-testid='planet-card'
      className={`
        mb-80
        md:flex md:flex-col md:justify-between md:mb-5
      `}
    >
      <Image
        src={planetImage}
        alt={planetName}
        height={300}
        width={300}
        className=' md:w-4/5 md:m-auto'
      />
      <p className='mt-10 text-2xl'>{planetName}</p>
    </li>
  );
}
