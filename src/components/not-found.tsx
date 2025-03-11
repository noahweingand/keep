import Image from "next/image";
import Link from "next/link";

export function NotFound() {
  return (
    <main
      className="tui-screen-800-600 black white-text w-full h-full m-auto"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="grid grid-cols-3 mb-8">
        <div className="flex items-start col-span-2">
          <Image
            role="presentation"
            alt="presentation"
            src="/pcstartup1.png"
            width={40}
            height={40}
          />
          <p className="ml-2">
            Award Medallion BIOS v6.0, An Energy Star Ally <br></br> Copyright (C) 1984-2001, Award
            Software, Inc.
          </p>
        </div>
        <div className="flex justify-end">
          <Image
            role="presentation"
            alt="presentation"
            src="/pcstartup2.png"
            width={200}
            height={150}
          />
        </div>
      </div>
      <div>ASUS P4T533-C ACPI BIOS Revision 1007 Beta 001</div>
      <div>Intel(R) Pentium(R) 4 2800 MHz Processor</div>
      <div>Memory Test : &nbsp;&nbsp; 262144K OK</div>
      <div>
        Award Plug and Play BIOS Extension v1.0A <br></br> Initialize Plug and Play Cards...{" "}
        <br></br> PNP init Completed
      </div>
      <div>Detecting Primary Parent .....: MAXTOR 6L040J2</div>
      <div>Detecting Primary Child ......: ASUS CD-S520/A</div>
      <div>Detecting Secondary Parent ...: Skip</div>
      <div> Detecting Secondary Child ....: None</div>
      <div> Compiling ....................: Successful</div>
      <div> Starting Psychorama ...........</div>
      <div> Transmitting Precon Process ...</div>
      <div> X2J35LLAN-443555 .............: Unknown</div>
      <div> ..............................: ERROR!</div>
      <div className="red-168 mb-12">Critical failure!</div>
      <div className="tui-statusbar absolute black white-text">
        <ul className="flex">
          <Link href="/">
            <li>
              Click <b>HERE</b> to return, <b>Alt+F2</b> to enter EZ flash utility
            </li>
          </Link>
        </ul>
        <ul>
          <li>08/20/2002-1850E/ICH2/W627-P4T533-C</li>
        </ul>
      </div>
    </main>
  );
}
