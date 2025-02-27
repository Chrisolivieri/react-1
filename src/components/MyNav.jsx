import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { CgDarkMode } from "react-icons/cg";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { Link } from "react-router-dom";
import "./MyNav.css";

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
            as = {Link} to = "/"
            className={theme === "light" ? "text-dark" : "text-light"}
          >
            Show book
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav"></Navbar.Collapse>
          <InputGroup>
            <Form.Control
              onChange={filter}
              value={input}
              placeholder="Search book"
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
