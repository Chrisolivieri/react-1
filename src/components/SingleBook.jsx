import { useState } from "react";
import Card from "react-bootstrap/Card";

function SingleBook(props) {
  const [cardColor, setCardColor] = useState("white");

  const handleCardClick = () => {
    const newColor = cardColor === "white" ? "red" : "white";
    setCardColor(newColor);
  
  };
  
  return (
    <Card onClick={handleCardClick} 
    style={{ borderColor: cardColor }}>
      <Card.Img src={props.immagine}/>
      <Card.Body>
        <Card.Title><p>{props.titolo}</p></Card.Title>
        <Card.Text>{props.testo}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
