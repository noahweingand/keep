import type { NextPage } from 'next';
import Head from 'next/head';

import { Page404Content } from '../components/404';

const Page404: NextPage = () => {
  return (
    <>
      <Head>
        <title>404</title>
        <meta name="description" content="keep" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/keepelf_black.svg" />
      </Head>

      <Page404Content />
    </>
  );
};

export default Page404;
