import { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import "../App.css";
import CommentArea from "./CommentArea"
import { ThemeContext } from "../context/ThemeContextProvider";



function SingleBook(props) {
  const [border, setBorder] = useState(false);
  const { theme } = useContext(ThemeContext);

  const handleCardClick = () => {
    setBorder(!border);

  
  };
  
  return (
    <Card className={theme === "light" ? "text-dark" : "text-light bg-dark border-light"} >
      <Card.Img className={border ? "redBorder" : null} src={props.immagine} onClick={handleCardClick}/>
      <Card.Body >
        <Card.Title><p>{props.titolo}</p></Card.Title>
        <Card.Text>{props.testo}</Card.Text>
        {border && <CommentArea asin = {props.asin} />}
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
