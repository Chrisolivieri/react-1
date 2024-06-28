import '../App.css';
import Horror from './books/horror.json';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function AllTheBooks() {
  return (
    
        <Container>
          <Row>
            {Horror.map((item) => (
              <Col sm={6} md={4} lg={3}>
                <Card>
      <Card.Img variant="top" src={item.img} />
      <Card.Body>
        <Card.Title><p>{item.title}</p></Card.Title>
        
      </Card.Body>
    </Card>
              </Col>
            ))}
          </Row>
        </Container>
    
  );
}

export default AllTheBooks;
