import React from "react";
import YouTube from "react-youtube";

import "video-react/dist/video-react.css";

const Selfie = () => {
  return (
    <div>
      <h6>
        Selfie to wieloletni projekt samochodu autonomicznego w skali 1:10 i
        1:8. Brałem udział w tworzeniu pierwszej, drugiej i trzeciej generacji
        pojazdu jako główny programista embedded. Projekt brał udział w zawodach
        Carolo Cup 2018 w Niemczech, F1/10 2018 we Włoszech a z zawodów
        International Autonomous Robot Racing Competition 2018 w Kanadzie
        przywiózł zwycięstwo.
      </h6>
      <img
        src="img/selfie.jpg"
        alt="selfie"
        style={{ maxHeight: "60vh", maxWidth: "70vw" }}
      />
      <div className="video_div">
        <YouTube videoId="7aDzb_-C7dU" />
      </div>
      <div className="video_div">
        <YouTube videoId="QPzK7BxkeqI" />
      </div>
    </div>
  );
};
export default Selfie;
