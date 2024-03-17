import React from "react";
import YouTube from "react-youtube";

import { Player } from "video-react";

import "video-react/dist/video-react.css";

const Candy = () => {
  return (
    <div>
      <h6>
        Candy to mój pierwszy robot typu linefollower bez turbiny nagrodzony
        wieloma nagrodami na zawodach rangi międzynarodowej. Doświadczenie z
        jego stworzenia wykorzystałem przy budowie robota Cukiereczek.
      </h6>
      <div className="video_div" style={{ width: "50vw" }}>
        <Player
          playsInline
          poster="video/posters/candy.png"
          src="video/candy.mp4"
        />
      </div>
      <div className="video_div">
        <YouTube videoId="eIJbF6jGlks" />
      </div>
    </div>
  );
};
export default Candy;
