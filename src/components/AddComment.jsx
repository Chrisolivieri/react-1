import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { LiaSaveSolid } from "react-icons/lia";
import "./AddComment.css";

function AddComment({ asin, loadComments }) {
  const initialFormState = {
    rate: "",
    comment: "",
    elementId: asin,
  };

  const [formValue, setFormValue] = useState(initialFormState);

  useEffect(() => {
    setFormValue((prevState) => ({ ...prevState, elementId: asin }));
  }, [asin]);

  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const handleSaveComment = async () => {
    if (!formValue.rate || !formValue.comment) {
      alert("Riempi tutti i campi");
      return;
    }

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/comments`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjliZDhlMTMxZGI2MDAwMTUwYjljMTIiLCJpYXQiOjE3MjE0ODk2MzQsImV4cCI6MTcyMjY5OTIzNH0.HkhBDKJM1cXFvUIP6z1W3TIL_lQYy0EYtlJ2i-TGni0",
          },
          method: "POST",
          body: JSON.stringify(formValue),
        }
      );

      if (response.ok) {
        loadComments();
        setFormValue({ ...initialFormState, elementId: asin });
        alert("Commento inserito correttamente");
      } else {
        alert("Inserisci un numero da 1 a 5");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  return (
    <>
      <Form>
        <Form.Group className="mb-3" controlId="rateInput">
          <Form.Label>Rate from 1 to 5</Form.Label>
          <Form.Control
            type="number"
            placeholder="Rate"
            min="1"
            max="5"
            name="rate"
            onChange={handleChange}
            value={formValue.rate}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="commentTextarea">
          <Form.Label>Your Comment</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="comment"
            onChange={handleChange}
            value={formValue.comment}
          />
        </Form.Group>
      </Form>
      <div className="d-flex justify-content-center">
        <button variant="primary" className="addComment" onClick={handleSaveComment}>
          <LiaSaveSolid size={25} />
        </button>
      </div>
    </>
  );
}

export default AddComment;
