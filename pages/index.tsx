import type { NextPage } from 'next';
import Head from 'next/head';

import { Header } from '../components/Header';
import { LinkSection } from '../components/LinkSection';
import { PromoSection } from '../components/PromoSection';
import { KeepShirtSVG } from '../components/svgs/KeepShirtSVG';
import { TourDates } from '../components/TourDates';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>keep</title>
        <meta name="description" content="keep.band" />
        <meta name="keywords" content="Keep, band, music, shoegaze" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/keepelf_black.svg" />
      </Head>

      <main className="black-168 w-full h-full m-auto" style={{ width: '100vw' }}>
        <Header />
        <LinkSection />
        <PromoSection />
        {/* @ts-ignore */}
        <TourDates />
        <KeepShirtSVG />
      </main>
    </>
  );
};

export default Home;
