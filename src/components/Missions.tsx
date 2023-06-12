import MissionCard from '@/components/MissionCard';
import Title from '@/components/Title';
import missions from '../data/missions';

export default function Missions() {
  return (
    <div
      data-testid='missions'
      className={`
        bg-white/10 text-center py-10 rounded-lg
          md:w-11/12
          md:mt-20
      `}
    >
      <Title headline='Missões' />
      <ul className={`
        mt-10 flex flex-wrap justify-center
      `}>
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
