import { useEffect, useState } from "react";
import { Button, ListGroup, Form, Badge,  } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

function SingleComment({ comment, loadComments }) {
  
  const handleDelete = async () => {
    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments/${comment._id}`,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5MWMxNzJiNWMyMDAwMTUyNzFmYjQiLCJpYXQiOjE3MjAyNjE2NTUsImV4cCI6MTcyMTQ3MTI1NX0.g2rDStXE1X97fb20GU7x7rOAa56qGgiB-FjyUF50kdU",
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
    }
  };
  const [isEditing, setIsEditing] = useState(false);
  
  const [formValue, setformValue] = useState({});

  const editForm = () => {
    setIsEditing(!isEditing);
  };

  useEffect (()=>{
    const initialFormEdit = {
      rate: comment.rate,
      comment: comment.comment,
      elementId: comment.elementId,
    }
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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2Njg5MWMxNzJiNWMyMDAwMTUyNzFmYjQiLCJpYXQiOjE3MjAyNjE2NTUsImV4cCI6MTcyMTQ3MTI1NX0.g2rDStXE1X97fb20GU7x7rOAa56qGgiB-FjyUF50kdU",
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
  const handleChange = (ev) => {
    setformValue({ ...formValue, [ev.target.name]: ev.target.value });
  };
  return (
    <>
    
      <ListGroup as="ol" className=" py-2">
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
          <Badge bg="primary" pill>
            Comment Author
          </Badge>
        </ListGroup.Item>
      </ListGroup>
      <Button variant="danger" onClick={handleDelete}>
      <FaTrashAlt />
      </Button>
      <Button
        variant="primary"
        onClick={() => {
          isEditing ? handleEdit() : editForm();
        }}
      >
        <FaEdit />
      </Button>
    </>
  );
}

export default SingleComment;
