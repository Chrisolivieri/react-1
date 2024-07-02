import "../App.css";
import Horror from "./books/horror.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SingleBook from "./SingleBook";

function AllTheBooks() {
  const [input, setInput] = useState("");
  const [libriFiltrati, setLibriFiltrati] = useState(Horror);

  const filter = (event) => {
    setInput(event.target.value);
    const filtrati = Horror.filter((b) => {
      return event.target.value.toLowerCase() === ""
        ? b
        : b.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setLibriFiltrati(filtrati);
  };

  return (
    <>
      
      <Container>
      <InputGroup>
        <Form.Control onChange={filter} value={input} placeholder="Cerca libro" />
      </InputGroup>
        <Row>
          {libriFiltrati.map((item) => (
            <Col sm={6} md={4} lg={3} key={item.asin}>
              <SingleBook
                immagine={item.img}
                titolo={item.title}
                testo={" € " + item.price}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default AllTheBooks;
