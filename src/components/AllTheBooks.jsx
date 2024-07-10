import "../App.css";
import Horror from "./books/horror.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import SingleBook from "./SingleBook";

function AllTheBooks({libriFiltrati}) {
  
  return (
    <>
      
      <Container>
      
        <Row>
        
          {libriFiltrati.map((item) => (
            <Col sm={12} md={6} lg={4} key={item.asin}>
              <SingleBook
                asin = {item.asin}
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
