import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components/Header';
import { LinkSection } from '../components/LinkSection';
import { KeepShirtSVG } from '../components/svgs/KeepShirtSVG';
import { TourDates } from '../components/TourDates';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>keep</title>
        <meta name="description" content="keep" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="black-168 w-full h-full m-auto" style={{ width: '100vw' }}>
        <div className="grid content-center justify-center items-center">
          <Header />
          <LinkSection />
          <TourDates />
          <KeepShirtSVG />
        </div>
      </main>
    </>
  );
};

export default Home;
