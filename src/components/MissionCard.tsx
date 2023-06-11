export interface PropMissionCard {
  name: string;
  year: string;
  country: string;
  destination: string;
}

export default function MissionCard(props: PropMissionCard) {
  const { name, year, country, destination } = props;

  return (
    <li
      data-testid='mission-card'
      className={`
        border
        w-11/12
        rounded-lg m-1
        bg-black/70
      `}
    >
      <p className='border-b p-3'>{name}</p>
      <div className='flex justify-around items-center p-3'>
        <p>{year}</p>
        <p>{country}</p>
        <p>{destination}</p>
      </div>
    </li>
  );
}
