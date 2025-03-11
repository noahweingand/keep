import { Header, LinkSection, PromoSection, TourDates, KeepShirtSVG } from "@/components";

export default function Home() {
  return (
    <main className="black-168 w-full h-full m-auto" style={{ width: "100vw" }}>
      <Header />
      <LinkSection />
      <PromoSection />
      <TourDates />
      <KeepShirtSVG />
    </main>
  );
}
