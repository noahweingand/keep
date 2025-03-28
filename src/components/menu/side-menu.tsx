"use client";

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
import { useCallback, useState } from "react";

export function SideMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = useCallback(() => setIsOpen(false), []);

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen} direction="left">
      <DrawerTrigger>
        <KeepElfSVG color="#ffffff" className="block sm:hidden h-12 w-12" />
      </DrawerTrigger>
      <DrawerContent className="bg-slate-950/90 mt-14 text-white">
        <DrawerHeader>
          <DrawerTitle hidden>Keep side navigation</DrawerTitle>
          <DrawerDescription hidden>
            A side navigation for the website on smaller screen sizes.
          </DrawerDescription>
        </DrawerHeader>
        <div className="flex flex-col h-full justify-between">
          <nav className="mt-4">
            <ul className="text-xl w-full space-y-1" role="list">
              <li className="flex">
                <Link
                  className="w-full px-3 py-2 hover:bg-white/30 hover:font-semibold"
                  href="/"
                  onClick={handleClose}
                >
                  Home
                </Link>
              </li>
              <li className="flex">
                <Link
                  className="w-full px-3 py-2 hover:bg-white/30 hover:font-semibold"
                  href="/tour"
                  onClick={handleClose}
                >
                  Tour
                </Link>
              </li>
              <li className="flex">
                <Link
                  className="w-full px-3 py-2 hover:bg-white/30 hover:font-semibold"
                  href="/music"
                  onClick={handleClose}
                >
                  Music
                </Link>
              </li>
              <li className="flex">
                <Link
                  className="w-full px-3 py-2 hover:bg-white/30 hover:font-semibold"
                  href="https://signalnoiserecords.com/products/keep-almost-static"
                >
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
