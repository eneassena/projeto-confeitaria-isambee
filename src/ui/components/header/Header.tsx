import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import logo from "ui/image/logo.jpg";
import Image from "react-bootstrap/Image";

import "ui/components/header/Header.css";

import { Link, Outlet } from "react-router-dom";
import MainHTML from "ui/components/main/MainHTML";

const Header = () => {
  return (
    <>
      <header>
        <Navbar className="header-top" fixed="top" expand="lg">
          <Container>
            <Navbar.Brand>
              <Link to="/">
                <Image className="image-logo" src={logo} />
              </Link>
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link>
                  <Link className="nav-link " to="/">
                    Home
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link className="nav-link" to="/cardapio">
                    Cardápio
                  </Link>
                </Nav.Link>

                <Nav.Link>
                  <Link className="nav-link" to="/contato">
                    Contato
                  </Link>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>

      <MainHTML>
        <Outlet />
      </MainHTML>
    </>
  );
};

export default Header;
