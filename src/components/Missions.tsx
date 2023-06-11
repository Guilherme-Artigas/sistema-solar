import MissionCard from '@/components/MissionCard';
import Title from '@/components/Title';
import missions from '../data/missions';

export default function Missions() {
  return (
    <div data-testid='missions' className='bg-white/10 text-center py-10 rounded-lg'>
      <Title headline='Missões' />
      <ul className='mt-10 flex flex-col items-center'>
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
