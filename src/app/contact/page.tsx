import Link from "next/link";
import { Toaster } from "react-hot-toast";

import { KeepElfSVG, ContactForm } from "@/components";

export default function Contact() {
  return (
    <main
      className="tui-window w-full m-auto lg:overflow-y-hidden pb-24 sm:pb-0"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Toaster position="top-right" />
      <fieldset className="tui-fieldset md:h-screen">
        <legend>
          <Link href="/">{"Return home"}</Link>
        </legend>
        <div className="flex justify-center content-center h-full">
          <KeepElfSVG color="#000000" className="hidden lg:block" />
          <ContactForm />
          <KeepElfSVG color="#000000" className="hidden 2xl:block" />
        </div>
      </fieldset>
    </main>
  );
}
