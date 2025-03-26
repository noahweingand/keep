import type { ComponentProps } from "react";

import Link from "next/link";

export function ButtonLink({ children, href = "" }: ComponentProps<"a">) {
  return (
    <Link
      className="border rounded bg-white text-black min-h-9.5 text-center px-3 py-1.5 cursor-pointer hover:bg-white/70 focus:ring focus:border focus:border-blue-950 focus:ring-white"
      href={href}
    >
      {children}
    </Link>
  );
}
