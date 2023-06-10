import MissionCard from '@/components/MissionCard';
import Title from '@/components/Title';
import missions from '../data/missions';

export default function Missions() {
  return (
    <div data-testid='missions'>
      <Title headline='Missões' />
      <ul>
        {missions.map(({ name, year, country, destination }) =>
          <MissionCard
            key={name}
            name={name}
            year={year}
            country={country}
            destination={destination}
          />
        )}
      </ul>
    </div>
  );
}
