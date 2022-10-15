import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

import { ContactForm } from '../components/ContactForm';
import { KeepElfSVG } from '../components/svgs/KeepElfSVG';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>keep</title>
        <meta name="description" content="keep" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/keepelf_black.svg" />
      </Head>

      <main
        className="tui-window content w-full h-full m-auto overflow-y-hidden h-screen"
        style={{ width: '100vw', height: '100vh' }}
      >
        <fieldset className="tui-fieldset h-screen">
          <legend>
            <Link href="/">{'Return home'}</Link>
          </legend>
          <div className="flex justify-center content-center h-screen">
            <KeepElfSVG color="#000000" />
            <ContactForm />
            <KeepElfSVG color="#000000" />
          </div>
        </fieldset>
      </main>
    </>
  );
};

export default Contact;
