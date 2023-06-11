import Head from 'next/head';
import Header from '@/components/Header';
import Missions from '@/components/Missions';
import SolarSystem from '@/components/SolarSystem';

export default function home() {
  return (
    <div className='bg-[url("../images/background.png")] text-white flex flex-col items-center'>
      <Head>
        <title>Sistema Solar</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Header />
      <SolarSystem />
      <Missions />
    </div>
  );
}
