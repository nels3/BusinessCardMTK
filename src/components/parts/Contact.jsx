import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Title from "src/components/parts/Title";
import { SocialIcon } from "react-social-icons";

const Contact = () => {
  return (
    <>
      <Title title="Kontakt" />
      <Container>
        <Row>
          <Col>Regon: 520999544 NIP: 5223217584</Col>

          <Col>
            <SocialIcon
              target="_blank"
              url="www.github.com"
              href="https://github.com/mice5"
            />
          </Col>
          <Col>
            <h6>mice5</h6>
          </Col>
          <Col>
            <SocialIcon
              target="_blank"
              url="www.linkedin.com"
              href="www.linkedin.com/in/mroz-mateusz/"
            />
          </Col>
          <Col>
            <h6>mroz-mateusz</h6>
          </Col>
          <Col>
            <SocialIcon
              target="_blank"
              url="www.youtube.com"
              href="https://www.youtube.com/@mrozu1337"
            />
          </Col>
          <Col>
            <h6>mrozu1337</h6>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contact;
