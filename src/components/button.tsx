import type { ComponentProps } from "react";

export function Button({ children }: ComponentProps<"button">) {
  return (
    <button className="border rounded bg-white text-blue-950 px-3 py-1.5 cursor-pointer hover:bg-white/90 focus:ring focus:border focus:border-blue-950 focus:ring-white">
      {children}
    </button>
  );
}
