import Link from "next/link";

import { FaSquareInstagram, FaSquareYoutube, FaSquareXTwitter, FaSpotify } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";

import {
  KeepElfSVG,
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components";

function Socials() {
  return (
    <>
      <a href="https://www.instagram.com/keepva/">
        <FaSquareInstagram
          className="hover:border hover:border-white-200 hover:rounded hover:p-0.25"
          size={28}
        />
      </a>
      <a href="https://www.youtube.com/@keep1602/featured">
        <FaSquareYoutube
          className="hover:border hover:border-white-200 hover:rounded hover:p-0.25"
          size={28}
        />
      </a>
      <a href="https://x.com/keepva">
        <FaSquareXTwitter
          className="hover:border hover:border-white-200 hover:rounded hover:p-0.25"
          size={28}
        />
      </a>
      <a href="https://open.spotify.com/artist/0oPLf7tpRZAVZMHWA0Nu7W?si=QukS94JwRWGBVZqw2pW13A">
        <FaSpotify
          className="hover:border hover:border-white-200 hover:rounded hover:p-0.25"
          size={28}
        />
      </a>
      <a href="https://music.apple.com/us/artist/keep/1274176252">
        <SiApplemusic
          className="hover:border hover:border-white-200 hover:rounded hover:p-0.5"
          size={27}
        />
      </a>
    </>
  );
}

function SideMenu() {
  return (
    <>
      <Drawer direction="left">
        <DrawerTrigger>
          <KeepElfSVG color="#ffffff" className="block sm:hidden h-12 w-12" />
        </DrawerTrigger>
        <DrawerContent className="bg-black mt-14 text-white">
          <DrawerHeader>
            <DrawerTitle hidden>Keep side navigation</DrawerTitle>
            <DrawerDescription hidden>
              A side navigation for the website on smaller screen sizes.
            </DrawerDescription>
          </DrawerHeader>
          <div className="flex flex-col h-full justify-between">
            <nav>
              <ul className="text-xl w-full" role="list">
                <li className="flex">
                  <Link className="w-full px-3 py-2 hover:bg-white/30 hover:font-semibold" href="/">
                    Home
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    className="w-full px-3 py-2 hover:bg-white/30 hover:font-semibold"
                    href="/tour"
                  >
                    Tour
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    className="w-full px-3 py-2 hover:bg-white/30 hover:font-semibold"
                    href="/music"
                  >
                    Music
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    className="w-full px-3 py-2 hover:bg-white/30 hover:font-semibold"
                    href="/store"
                  >
                    Store
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex flex-row justify-evenly my-2">
              <Socials />
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export function Menu() {
  return (
    <header className="flex flex-row justify-center sm:justify-between items-center bg-black text-white px-2 sm:px-4 py-2">
      <div className="absolute top-2 left-2 sm:static sm:top-auto sm:left-auto flex flex-row items-center">
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
              <Link className="hover:underline" href="/store">
                Store
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <h1 className="mt-2 sm:mt-0">
        <Link className="text-2xl sm:text-3xl" href="/">
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
