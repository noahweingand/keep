import Image from "next/image";

export const PromoSection = () => {
  return (
    <>
      <div className="w-full h-full md:flex justify-evenly content-center">
        <Image
          alt="Promotional photo of Keep"
          className="w-full md:w-1/3 lg:m-8"
          aria-label="Keep Promo"
          src="/keep_band.jpeg"
          width="520"
          height="215"
        />
        <iframe
          className="w-full md:w-2/3 lg:m-8"
          src="https://www.youtube.com/embed/Pl8z_7Xc6CM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="w-full mt-12">
        {/* <Marquee className="text-white" speed={75} gradient={false}>
          <span>
            <NavLink href="https://keepva.bandcamp.com/" text="Happy In Here - out 2/3/23" />
          </span>
        </Marquee> */}
      </div>
    </>
  );
};
