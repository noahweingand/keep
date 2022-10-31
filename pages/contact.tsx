import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { Toaster } from 'react-hot-toast';

import { ContactForm } from '../components/ContactForm';
import { KeepElfSVG } from '../components/svgs/KeepElfSVG';

const Contact: NextPage = () => {
  return (
    <>
      <Head>
        <title>keep</title>
        <meta name="description" content="keep.band contact" />
        <meta name="keywords" content="Keep, band, music, contact" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/keepelf_black.svg" />
      </Head>

      <main
        className="tui-window w-full m-auto lg:overflow-y-hidden pb-24 sm:pb-0"
        style={{ width: '100vw', height: '100vh' }}
      >
        <Toaster position="top-right" />
        <fieldset className="tui-fieldset md:h-screen">
          <legend>
            <Link href="/">{'Return home'}</Link>
          </legend>
          <div className="flex justify-center content-center h-full">
            <KeepElfSVG color="#000000" className="hidden lg:block" />
            <ContactForm />
            <KeepElfSVG color="#000000" className="hidden 2xl:block" />
          </div>
        </fieldset>
      </main>
    </>
  );
};

export default Contact;
