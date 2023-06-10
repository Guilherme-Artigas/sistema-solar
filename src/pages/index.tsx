import Head from 'next/head';
import Header from '@/components/Header';
import Missions from '@/components/Missions';
import SolarSystem from '@/components/SolarSystem';

export default function home() {
  return (
    <div>
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
