import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { SocialIcon } from "react-social-icons";

import { Player } from "video-react";

import "video-react/dist/video-react.css";

const Cukiereczek = () => {
  return (
    <div>
      <h6>
        Cukiereczek to robot typu linefollower bez turbiny, który zbudowałem w
        ramach pracy przejściowej magisterskiej między styczniem a marcem 2018r.
        Debiutował na zawodach Robomaticon 2018 w Warszawie, gdzie zajął 3
        miejsce, zaraz za Candy. Później rozwijane było oprogramowanie, które
        zostało tematem pracy dyplomowej (mapowanie trasy). Wielokrotnie
        nagradzany na zawodach rangi międzynarodowej w Polsce.
      </h6>
      <img
        src="img/cukiereczek.jpg"
        alt="Cukiereczek"
        style={{ maxHeight: "60vh", maxWidth: "50vw" }}
      />
      <Container>
        <Row>
          <Col>
            <img
              src="img/cukiereczek2.png"
              alt="Cukiereczek"
              style={{ maxHeight: "60vh", maxWidth: "30vw" }}
            />
          </Col>
          <Col>
            <h6>
              Główne cechy:
              <li> 12 czujników linii </li>
              <li>Mikrokontroler STM32 F7 </li>
              <li>IMU: żyroskop + akcelerometr </li>
              <li>RGB </li> <li>Lidar ToF </li>
              <li>USB </li> <li>karta µSD </li>
              <li>Bluetooth 4.2 </li>
              <li>Własny mostek H </li>
              <li>Enkodery magnetyczne</li>
            </h6>
          </Col>
        </Row>
      </Container>
      <div className="video_div">
        <Player
          playsInline
          poster="video/posters/Cukiereczek1.png"
          src="video/Cukiereczek1.mp4"
        />
      </div>
      <div className="video_div">
        <Player
          playsInline
          poster="video/posters/Cukiereczek3.png"
          src="video/Cukiereczek3.mp4"
        />
      </div>
      <div className="video_div">
        <Player
          playsInline
          poster="video/posters/Cukiereczek5.png"
          src="video/Cukiereczek5.mp4"
        />
      </div>
      <h6>Więcej o projekcie można przeczytać na forum forbot:</h6>
      <SocialIcon
        target="_blank"
        url="wwww.forbot.pl"
        href="https://forbot.pl/forum/topic/13552-cukiereczek/"
      />
    </div>
  );
};
export default Cukiereczek;
