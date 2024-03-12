import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Accordion from "react-bootstrap/Accordion";

import Title from "src/components/parts/Title";

const AboutMe = () => {
  return (
    <div>
      <Title title="O mnie" />
      <Container>
        <Row>
          <Col>
            <img
              src="img/logo2.jpg"
              alt="mgr. inż. Mateusz Mróz"
              style={{ maxHeight: "60vh", maxWidth: "50vw" }}
            />
          </Col>
          <Col>
            <Accordion>
              <h3>mgr. inż. Mateusz Mróz</h3>
              <h5>C/C++ MCU Software Developer for UAV/UAS</h5>
              <div style={{ paddingLeft: "20px", paddingTop: "20px" }} />

              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  Magister inżynier kierunku Automatyka i Robotyka
                </Accordion.Header>
                <Accordion.Body>
                  Magister inżynier kierunku Automatyka i Robotyka, na Wydziale
                  Mechanicznym, Energetyki i Lotnictwa Politechniki
                  Warszawskiej.
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Programista systemów wbudowanych
                </Accordion.Header>
                <Accordion.Body>
                  <li>
                    C / C++ na mikrokontrolery: STM32, Texas Instruments i
                    podobne...
                  </li>
                  <li>
                    Systemy czasu rzeczywistego: FreeRTOS, ChibiOS. Ubuntu, Git,
                    Gitlab, podstawy CI-CD, Docker, skrypty bash i Python.
                  </li>
                  <li>
                    Odrobina C/C++ pod aplikacje (biblioteki std, thread,
                    wyjątki, Qt).
                  </li>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="2">
                <Accordion.Header>Elektronik</Accordion.Header>
                <Accordion.Body>
                  <li>
                    Doświadczenie w tworzeniu komercyjnych (i niekomercyjnych)
                    projektów elektronicznych (Altium, Cadence) i wykorzystanie
                    tego doświadczenia w programowaniu.{" "}
                  </li>
                  <li>
                    Doświadczenie z FOC dla silników BLDC. Systemy IMU, GPS.
                    CAN. Protokoły komunikacyjne.
                  </li>
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="3">
                <Accordion.Header>Hobby i zainterestowania</Accordion.Header>
                <Accordion.Body>
                  Hobbistycznie "droniarz" i motoryzacja
                </Accordion.Body>
              </Accordion.Item>

              <Accordion.Item eventKey="4">
                <Accordion.Header>Koło Naukowe Robotyków PW</Accordion.Header>
                <Accordion.Body>
                  5-letni członek Koła Naukowego Robotyków Politechniki
                  Warszawskiej: - autor robotów linefollower: Cukiereczek i
                  Candy, 30+ nagród na międzynarodowych zawodach robotów. -
                  współtwórca projektu samochodu autonomicznego 1:8 Selfie,
                  zwycięstwo na zawodach IARRC 2018 w Kanadzie.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row>
          <img
            src="img/baner.jpg"
            alt="Technologie"
            style={{ width: "100vw", padding: "10px" }}
          />
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
