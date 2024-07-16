import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";
import { useState } from "react";
import CommentArea from "./CommentArea";

function AllTheBooks({ libriFiltrati }) {
  const [border, setBorder] = useState(null);
  const handleCardClick = (asin) => {
    setBorder(asin);
  };

  return (
    <>
      <Container>
        <Row>
          <Col md ={8}>
          <Row>
          {libriFiltrati.map((item) => (
            <Col sm={12} md={6} lg={4} key={item.asin}>
              <SingleBook
                book = {item}
                border = {border}
                handleCardClick = {handleCardClick}
              />
            </Col>
          ))}
        </Row>
          </Col>
          <Col md={4}>
          {border && <CommentArea asin={border}   />}
            </Col>
        </Row>
        
      </Container>
    </>
  );
}

export default AllTheBooks;
