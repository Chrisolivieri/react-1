import "../App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SingleBook from "./SingleBook";

function AllTheBooks({ libriFiltrati }) {
  return (
    <>
      <Container>
        <Row>
          {libriFiltrati.map((item) => (
            <Col sm={12} md={6} lg={4} key={item.asin}>
              <SingleBook
                asin={item.asin}
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
