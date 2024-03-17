import React, { useState } from "react";
import Title from "src/components/parts/Title";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Offcanvas from "react-bootstrap/Offcanvas";

import Cukiereczek from "src/components/parts/projects/Cukiereczek";
import Candy from "src/components/parts/projects/Candy";
import Selfie from "src/components/parts/projects/Selfie";
import Drony from "src/components/parts/projects/Drony";

const projects = [
  {
    src: "img/cukiereczek.jpg",
    title: "Cukiereczek",
    text: "Robot sportowy typu line follower.",
    body: Cukiereczek(),
  },
  {
    src: "img/candy.jpg",
    title: "Candy",
    text: "Robot sportowy typu line follower.",
    body: Candy(),
  },

  {
    src: "img/selfie.jpg",
    title: "Selfie",
    text: "Samochód autonomiczny w skali (współtwórca, programista niskopoziomowy)",
    body: Selfie(),
  },
  {
    src: "img/drony4.jpg",
    title: "Drony",
    text: "Twórca dronów sportowych",
    body: Drony(),
  },
];

const Projects = () => {
  const [show, setShow] = useState(false);
  const [id, setId] = useState(0);

  const handleClose = () => {
    setShow(0);
    setId(0);
  };
  const handleShow = (index) => {
    setShow(true);
    setId(index);
  };

  return (
    <div>
      <Title title="Projekty (niekomercyjne)" />
      <Container>
        <>
          <Row>
            {projects.map((project, index) => (
              <Col style={{ paddingTop: "10px" }}>
                <Card style={{ minWidth: "30vw" }}>
                  <Card.Img variant="top" src={project.src} />
                  <Card.Body>
                    <Card.Title>{project.title}</Card.Title>
                    <Card.Text>{project.text} </Card.Text>
                    <Button variant="dark" onClick={() => handleShow(index)}>
                      Więcej
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      </Container>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{projects[id].title}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>{projects[id].body}</Offcanvas.Body>
      </Offcanvas>
    </div>
  );
};

export default Projects;
