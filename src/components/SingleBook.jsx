import { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import "./SingleBook.css";
import { ThemeContext } from "../context/ThemeContextProvider";

function SingleBook({ book, border, handleCardClick }) {
  const { theme } = useContext(ThemeContext);

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
        <Card.Text>{book.price}</Card.Text>
        {/* {border && <CommentArea asin={book.asin} />} */}
      </Card.Body>
    </Card>
  );
}

export default SingleBook;
