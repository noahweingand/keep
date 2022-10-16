export const LiveIframe = () => {
  return (
    <div className="w-full h-full md:flex justify-evenly content-center">
      <img
        className="w-full md:w-1/3 lg:m-8"
        aria-label="Keep Promo"
        src="/keep-promo-white.jpg"
        width="520"
        height="215"
      />
      <iframe
        className="w-full md:w-2/3 lg:m-8"
        src="https://www.youtube-nocookie.com/embed/u6o-_BI1J8I?vq=hd720"
        title="Keep live set YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
};
