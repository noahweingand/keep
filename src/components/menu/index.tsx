import Link from "next/link";

import { SideMenu } from "./side-menu";
import { Socials } from "./socials";

export function Menu() {
  return (
    <header className="flex flex-row justify-center sm:justify-between items-center bg-black text-white px-2 sm:px-4 py-3">
      <div className="absolute top-2 left-1 sm:static sm:top-auto sm:left-auto flex flex-row items-center">
        <SideMenu />

        <nav>
          <ul className="hidden sm:flex flex-row space-x-3.5" role="list">
            <li>
              <Link className="hover:underline" href="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/tour">
                Tour
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/music">
                Music
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline"
                href="https://signalnoiserecords.com/products/keep-almost-static"
              >
                Store
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <h1 className="mt-2 sm:mt-0">
        <Link className="text-2xl sm:text-3xl leading-none" href="/">
          K E E P
        </Link>
      </h1>

      <div className="hidden sm:flex flex-row space-x-2.5">
        <Socials />
      </div>
      {/* TODO: Maybe Pre-Order, or "STORE"? */}
    </header>
  );
}
