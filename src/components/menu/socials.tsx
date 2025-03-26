import { FaSquareInstagram, FaSquareYoutube, FaSquareXTwitter, FaSpotify } from "react-icons/fa6";
import { SiApplemusic } from "react-icons/si";

export function Socials() {
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
