import { useContext, useEffect } from "react";
import Card from "react-bootstrap/Card";
import "./SingleBook.css";
import { ThemeContext } from "../context/ThemeContextProvider";
import { Link, useNavigate } from "react-router-dom";

function SingleBook({ book, border, handleCardClick }) {
  const { theme } = useContext(ThemeContext);

  const navigate = useNavigate()
   
  //usiamo useEffect per gestire l'errore dell'asin inesistente
  useEffect(() => {
    if (!book || !book.asin) {
      navigate('/404');
    }
  
  }, [book, navigate]);

  if (!book || !book.asin) {
    
    return null; 
  }


  return (
    <Card
      className={
        theme === "light" ? "text-dark" : "text-light bg-dark border-light"
      }
    >
      <Card.Img
        className={border === book.asin ? "redBorder" : null}
        src={book.img}
        onClick={() => handleCardClick(book.asin)}
        data-testid="bookCards"
      />
      <Card.Body>
        <Card.Title>
          <p>{book.title}</p>
        </Card.Title>
        <Card.Text>{book.price} €</Card.Text>
        <Link to={`/details/${book.asin}`}>Details</Link>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
