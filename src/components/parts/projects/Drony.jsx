import React from "react";
import YouTube from "react-youtube";

import "video-react/dist/video-react.css";

const Drony = () => {
  return (
    <div>
      <h6>Hobistycznie latam dronami.</h6>
      <img
        src="img/drony1.jpg"
        alt="Drony"
        style={{ maxHeight: "60vh", maxWidth: "70vw" }}
      />
      <div className="video_div">
        <img
          src="img/drony2.jpg"
          alt="Drony"
          style={{ maxHeight: "60vh", maxWidth: "70vw" }}
        />
      </div>
      <div className="video_div">
        <YouTube videoId="rA0vHaC-3xw" />
      </div>
      <div className="video_div">
        <YouTube videoId="_91da7VmsjU" />
      </div>
    </div>
  );
};
export default Drony;
