import { lista_cardapios } from "data/Variaveis";
import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import "./Cardapio.style.css";

export const Cardapio: React.FC = () => {
  return (
    <>
      <Container>
        <Row>
          <Col className="p-5">
            <span className="text-dark h1">Bolos</span>
          </Col>
        </Row>
        <Row className="justify-content-start g-4">
          {lista_cardapios.map((item) => (
            <Col md={6} key={item.id}>
              <Card>
                <Row>
                  <Col>
                    <Card.Img src={item.img} />
                  </Col>
                  <Col>
                    <Card.Body>
                      <Card.Text>{item.title}</Card.Text>
                      <Card.Text>{item.valor}</Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Cardapio;
