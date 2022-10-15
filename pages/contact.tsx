import type { NextPage } from 'next';
import Head from 'next/head';

import { ContactForm } from '../components/ContactForm';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>keep</title>
        <meta name="description" content="keep" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="tui-window w-full h-full m-auto" style={{ width: '100vw' }}>
        <div className="grid justify-center content-center h-screen">
          <ContactForm />
        </div>
      </main>
    </>
  );
};

export default Contact;
