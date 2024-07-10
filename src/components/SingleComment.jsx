import { useState } from "react";
import { Button, ListGroup, Form, InputGroup, Badge } from "react-bootstrap";

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
  const initialFormEdit = {
    rate: comment.rate,
    comment: comment.comment,
    elementId: comment.elementId,
  };
  const [formValue, setformValue] = useState(initialFormEdit);

  const editForm = () => {
    setIsEditing(!isEditing);
  };
  const handleEdit = async () => {
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
        alert("Modificato corrrettamente");
        loadComments();
        setIsEditing(false);
        setformValue(initialFormEdit);
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
      <Button variant="danger" onClick={handleDelete}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-trash"
          viewBox="0 0 16 16"
        >
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
          <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
        </svg>
      </Button>
      <Button
        variant="primary"
        onClick={() => {
          isEditing ? handleEdit() : editForm();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-pencil-square"
          viewBox="0 0 16 16"
        >
          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fill-rule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
          />
        </svg>
      </Button>
    </ListGroup>
  );
}

export default SingleComment;
