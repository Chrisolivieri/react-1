import { useState } from "react";
import Card from "react-bootstrap/Card";
import "../App.css";
import CommentArea from "./CommentArea"


function SingleBook(props) {
  const [border, setBorder] = useState(false);

  const handleCardClick = () => {
    setBorder(!border);
  
  };
  
  return (
    <Card className={border ? "redBorder" : null} onClick={handleCardClick}>
      <Card.Img src={props.immagine}/>
      <Card.Body>
        <Card.Title><p>{props.titolo}</p></Card.Title>
        <Card.Text>{props.testo}</Card.Text>
        {border && <CommentArea asin = {props.asin} />}
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
