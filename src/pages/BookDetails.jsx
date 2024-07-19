import { useParams } from "react-router-dom";
import CommentArea from "../components/CommentArea";
import SingleBook from "../components/SingleBook";
import { Col, Container, Row } from "react-bootstrap";
import { useState } from "react";
import "./BookDetails.css";

function BookDetails({ libriFiltrati }) {
  const { asin } = useParams();

  // filtra il libro specifico basato sull'asin
  const [selectedBook, setSelectedBook] = useState(
    libriFiltrati.find((item) => item.asin === asin)
  );

  return (
    <div>
      {setSelectedBook ? (
        <Container>
          <Row>
            <Col
              sm={12}
              md={12}
              lg={6}
              className="d-flex justify-content-center"
            >
              <div className="book">
                <SingleBook
                  book={selectedBook}
                  border={null}
                  handleCardClick={() => null}
                />
              </div>
            </Col>
            <Col lg={5} md={6} sm={12} className="commentArea">
              <CommentArea asin={asin}/>
            </Col>
          </Row>
        </Container>
      ) : (
        <h1>Libro non trovato</h1>
      )}
    </div>
  );
}

export default BookDetails;
