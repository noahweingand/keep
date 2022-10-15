import type { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import { ContactForm } from '../components/ContactForm';
import { KeepGuySvg } from '../components/svgs/KeepGuySVG';

const Contact: NextPage = () => {
  const router = useRouter();

  const handleBackNav = (e: React.FormEvent) => {
    e.preventDefault();
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>keep</title>
        <meta name="description" content="keep" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <link rel="icon" href="/keepelf_black.svg" />
      </Head>

      <main className="tui-window content w-full h-full m-auto" style={{ width: '100vw' }}>
        <fieldset className="tui-fieldset">
          <legend>
            <button onClick={handleBackNav}>{'Return home'}</button>
          </legend>
          {/* <div className="flex justify-center pb-24">
            <KeepGuySvg width={302} height={622} />
          </div> */}
          <div className="grid justify-center content-center h-screen">
            <ContactForm />
          </div>
        </fieldset>
      </main>
    </>
  );
};

export default Contact;
