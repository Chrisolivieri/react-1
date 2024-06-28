import '../App.css';
import horror from './books/horror.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function AllTheBooks() {
  return (
    <Container>
      <Row>
        {horror.map((item) => (
          <Col key={item.id}>
            <img src={item.img} alt={item.title} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default AllTheBooks;
