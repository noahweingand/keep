import { ButtonLink } from "@/components";

export default function NotFound() {
  return (
    <main className="flex-1 flex items-center text-center bg-black text-white">
      <div className="flex-col w-full justify-center items-center space-y-10">
        <h1 className="text-4xl sm:text-5xl font-semibold">{`We're sorry!`}</h1>
        <h2 className="text-xl">This page no longer exists.</h2>
        <ButtonLink href="/">Home</ButtonLink>
      </div>
    </main>
  );
}
