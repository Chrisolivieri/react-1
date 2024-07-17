import { useContext } from "react";
import Card from "react-bootstrap/Card";
import "./SingleBook.css";
import { ThemeContext } from "../context/ThemeContextProvider";
import { Link, useNavigate } from "react-router-dom";

function SingleBook({ book, border, handleCardClick }) {
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  if (!book || !book.asin) {
    return <div>Errore: libro non disponibile</div>;
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
      />
      <Card.Body>
        <Card.Title>
          <p>{book.title}</p>
        </Card.Title>
        <Card.Text>{book.price} €</Card.Text>
        <Link to={`/details/${book.asin}`}>Dettagli</Link>
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
