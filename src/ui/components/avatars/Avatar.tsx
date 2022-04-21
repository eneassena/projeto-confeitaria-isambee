import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./Avatar.style.css";

import bolo1 from "ui/image/nutela.jpg";
import bolo2 from "ui/image/bolo-main.jpeg";
import bolo3 from "ui/image/cremoso.jpg";

// Bolo Caseiro
// Bolo Decorado
// Bolo Afetivo


const Avatar = () => {
  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col className="" md={4}>
          <div className="card-avatar">
            <section
              style={{
                width: "200px",
                height: "200px",
              }}
            >
              <img src={bolo1} alt="Avatar" height="100%" width="100%" />
            </section>

            <section>
              <h5 className="text-center mt-3 p-3">
                Bolo Caseiro
              </h5>
              <p className="p-2">
                Variedade de sabores caseiro.
              </p>
            </section>
          </div>
        </Col>
        <Col md={4}>
          <div className="card-avatar">
            <section
              style={{
                width: "200px",
                height: "200px",
              }}
            >
              <img src={bolo2} alt="Avatar" height="100%" width="100%" />
            </section>
            <section>
              <h5 className="text-center mt-3 p-3">Bolo Decorado</h5>
              <p className="p-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum,
                numquam.
              </p>
            </section>
          </div>
        </Col>
        <Col className="" md={4}>
          <div className="card-avatar">
            <section
              style={{
                width: "200px",
                height: "200px",
              }}
            >
              <img src={bolo3} alt="Avatar" height="100%" width="100%" />
            </section>
            <section>
              <h5 className="text-center mt-3 p-3">Bolo Afetivo</h5>
              <p className="p-2">
                Esse bolo é indicado para pequenas comemorações.
              </p>
            </section>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Avatar;
