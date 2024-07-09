import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function AddComment({ asin }) {
  const [formValue, setFormValue] = useState({
    rate: "",
    comment: "",
    elementId: asin,
  });
  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };

  const handleSaveComment = async () => {
    await fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhjMDdiYjNiMDQ4YTAwMTU5MDE3MjkiLCJpYXQiOjE3MjA0NTMwNTEsImV4cCI6MTcyMTY2MjY1MX0.QKHvKhNRevprCC09YfHposyES6FxvVVOjrNcGlPUyUI",
      },
      method: "POST",
      body: JSON.stringify(formValue),
    });
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Rate from 1 to 5</Form.Label>
        <Form.Control
          type="number"
          placeholder="Rate"
          min="1"
          max="5"
          name="rate"
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="comment"
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleSaveComment}>
        Send Comment
      </Button>
    </Form>
  );
}

export default AddComment;
