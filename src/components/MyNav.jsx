import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { CgDarkMode } from "react-icons/cg";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

function MyNav({ filter, input }) {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <>
      <Navbar
        expand="lg"
        className={theme === "light" ? "mb-5" : "bg-dark mb-5 text-light"}
      >
        <Container fluid>
          <Navbar.Brand
            href="#home"
            className={theme === "light" ? "text-dark" : "text-light"}
          >
            Visualizza libri
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <InputGroup>
            <Form.Control
              onChange={filter}
              value={input}
              placeholder="Cerca libro"
            />
          </InputGroup>
          <Navbar.Brand className="px-3">
            <Button
              onClick={() => toggleTheme()}
              variant={theme === "light" ? "outline-dark" : "outline-light"}
            >
              <CgDarkMode size={23} />
            </Button>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNav;
