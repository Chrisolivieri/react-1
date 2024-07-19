import { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";
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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhjMDdiYjNiMDQ4YTAwMTU5MDE3MjkiLCJpYXQiOjE3MjA0NTMwNTEsImV4cCI6MTcyMTY2MjY1MX0.QKHvKhNRevprCC09YfHposyES6FxvVVOjrNcGlPUyUI",
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
        <Button variant="primary" onClick={handleSaveComment}>
          <LiaSaveSolid className="button3" size={25} />
        </Button>
      </div>
    </>
  );
}

export default AddComment;
