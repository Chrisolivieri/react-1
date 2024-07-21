import { useEffect, useState } from "react";
import { ListGroup, Form, Badge,  } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import "./SingleComment.css";

function SingleComment({ comment, loadComments }) {

  
  const handleDelete = async () => {
 
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjliZDhlMTMxZGI2MDAwMTUwYjljMTIiLCJpYXQiOjE3MjE0ODk2MzQsImV4cCI6MTcyMjY5OTIzNH0.HkhBDKJM1cXFvUIP6z1W3TIL_lQYy0EYtlJ2i-TGni0",
            "Content-Type": "application/json",
          },
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("Cancellato corrrettamente");
        loadComments();
      } else {
        alert("Errore nella cancellazione");
      }
    } catch (error) {
      alert("Riprova più tardi.");
      console.log(error);
    }
  };
  const [isEditing, setIsEditing] = useState(false);
  
  const [formValue, setformValue] = useState({});
  
// usiamo editForm per rendere visibile il form di modifica
  const editForm = () => {
    setIsEditing(!isEditing);
  };
// usiamo useEffect per settare i valori iniziali
  useEffect (()=>{
    const initialFormEdit = {
      rate: comment.rate,
      comment: comment.comment,
      elementId: comment.elementId,
    }
    // definiamo i valori iniziali
      setformValue(initialFormEdit)
  },[comment])

  const handleEdit = async () => {
    if (formValue.rate < 1 || formValue.rate > 5) {
      alert("Inserisci un valore compreso tra 1 e 5");
      return;
    }
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjliZDhlMTMxZGI2MDAwMTUwYjljMTIiLCJpYXQiOjE3MjE0ODk2MzQsImV4cCI6MTcyMjY5OTIzNH0.HkhBDKJM1cXFvUIP6z1W3TIL_lQYy0EYtlJ2i-TGni0",
            "Content-Type": "application/json",
          },
          method: "PUT",
          body: JSON.stringify(formValue),
        }
      );
      if (response.ok) {
        alert("Modificato correttamente");
        await loadComments();
        setIsEditing(false);
       // setformValue(initialFormEdit);
      } else {
        alert("Errore nella modifica");
      }
    } catch (error) {
      alert("Riprova più tardi.");
    }
  };

  // usiamo handleChange per rendere visibile il form di modifica
  const handleChange = (ev) => {
    setformValue({ ...formValue, [ev.target.name]: ev.target.value });
  };
  return (
    <div className="singleComment">
    
      <ListGroup data-testid="singleComment" as="ol" className=" py-2">
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Rate</div>
            {isEditing ? (
              <Form.Control
                className="mb-3 w-100"
                type="number"
                min="1"
                max="5"
                name="rate"
                onChange={handleChange}
                value={formValue.rate}
              />
            ) : (
              comment.rate
            )}
          </div>
          <Badge bg="primary" pill>
            1 to 5
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Comment</div>
            {isEditing ? (
              <Form.Control
                as="textarea"
                className="mb-3 w-100"
                aria-label="With textarea"
                name="comment"
                onChange={handleChange}
                value={formValue.comment}
              />
            ) : (
              comment.comment
            )}
          </div>
          <Badge bg="primary" pill>
            User Comment
          </Badge>
        </ListGroup.Item>
        <ListGroup.Item
          as="li"
          className="d-flex justify-content-between align-items-start"
        >
          <div className="ms-2 me-auto">
            <div className="fw-bold">Author</div>
            {comment.author}
          </div>

        </ListGroup.Item>
      </ListGroup>
      <div className="d-flex justify-content-center">
        <button onClick={handleDelete} className="mx-3 deleteComment">
        <FaTrashAlt />
        </button>
        <button className="editComment"
          onClick={() => {
            isEditing ? handleEdit() : editForm();
          }}
        >
          <FaEdit />
        </button>
      </div>
    </div>
  );
}

export default SingleComment;
