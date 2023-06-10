import Head from 'next/head';
import Header from '@/components/Header';
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
    </div>
  );
}
