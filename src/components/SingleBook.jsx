import Card from "react-bootstrap/Card";

function SingleBook(props) {
  
  return (
    <Card>
      <Card.Img src={props.immagine}/>
      <Card.Body>
        <Card.Title><p>{props.titolo}</p></Card.Title>
        <Card.Text>{props.testo}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
