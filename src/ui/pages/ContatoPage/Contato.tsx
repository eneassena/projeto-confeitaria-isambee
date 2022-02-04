import React from "react";
import { Col, Container, Row, FloatingLabel, Form } from "react-bootstrap";

const Contato: React.FC = () => {
  return (
    <>
      <Container className="contato-main">
        <Row className="mt-5">
          <Col md={6}>
            <Row className="p-5">
              <strong className="text-center">Contato</strong>
            </Row>
            <Row className="justify-content-center p-5">
              <span className="text-center">
                Endereço: rua C, Centro, Nº 360
              </span>
            </Row>
            <Row className="justify-content-center p-5">
              <span className="text-center text-dark">
                Telefone: +55 75 98135648
              </span>
            </Row>
            <Row className="justify-content-center p-5">
              <p className="text-center">Email: isambee@hotmail.com</p>
            </Row>
          </Col>

          <Col md={6}>
            <p className="p-5"></p>

            <section>
              <form className="row justify-content-center align-content-center">
                <Row md="12">
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Nome"
                      id="nome"
                      required
                    />
                    <label htmlFor="nome">Nome</label>
                  </div>

                  <div className="row my-3"></div>

                  <div className="form-floating">
                    <input
                      type="email"
                      id="email"
                      placeholder="E-mail"
                      className="form-control"
                      required
                    />
                    <label htmlFor="email">Email</label>
                  </div>

                  <div className="row my-3"></div>

                  <FloatingLabel
                    controlId="messageContato"
                    label="Escreva aqui sua mensagem"
                  >
                    <Form.Control
                      as="textarea"
                      placeholder="Escreva aqui sua mensagem"
                      style={{ height: "100px" }}
                    />
                  </FloatingLabel>

                  <div className="mb-5"></div>

                  <Col>
                    <button type="submit" className="btn btn-outline-warning ">
                      Enviar
                    </button>
                  </Col>
                </Row>
              </form>
            </section>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contato;
