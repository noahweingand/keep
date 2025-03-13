import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-screen m-auto bg-blue-950/90" style={{ width: "100vw" }}>
      <div className="flex flex-col sm:flex-row min-h-screen space-y-6 sm:space-y-0 justify-center items-center mx-2 sm:mx-8">
        <div className="relative mr-0 sm:mr-12">
          <div
            className="absolute animate-pulse rounded-full bg-gradient-to-l from-[#4E4A46] via-[#97805A] to-[#E8783A] blur-2xl opacity-10"
            style={{
              inset: "clamp(-2rem, -15%, -5rem)",
            }}
          ></div>
          <Image
            className="relative rounded-lg shadow-lg"
            src="/images/albums/almost_static.jpeg"
            alt="Album artwork for Almost Static by Keep"
            width={500}
            height={500}
          />
        </div>
        <div className="flex flex-col h-full justify-center text-white">
          <h2 className="text-4xl font-semibold mb-3">Almost Static</h2>
          <h3 className="text-xl">Our newest single {`"Single Name"`} is out now. </h3>
          <div className="flex flex-row space-x-3 items-center mt-4">
            <button className="border rounded bg-white text-blue-950 px-3 py-1.5">Pre-order</button>
            <button className="border rounded bg-white text-blue-950 px-3 py-1.5">Listen</button>
          </div>
        </div>
      </div>
    </main>
  );
}
