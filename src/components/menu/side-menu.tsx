import Link from "next/link";

import {
  KeepElfSVG,
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
} from "@/components";

import { Socials } from "./socials";

export function SideMenu() {
  return (
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
                <Link className="w-full px-3 py-2 hover:bg-white/30 hover:font-semibold" href="/">
                  Store
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-row justify-evenly mb-8">
            <Socials />
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
