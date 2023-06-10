export interface PropMissionCard {
  name: string;
  year: string;
  country: string;
  destination: string;
}

export default function MissionCard(props: PropMissionCard) {
  const { name, year, country, destination } = props;

  return (
    <li data-testid='mission-card'>
      <p>{name}</p>
      <p>{year}</p>
      <p>{country}</p>
      <p>{destination}</p>
    </li>
  );
}
