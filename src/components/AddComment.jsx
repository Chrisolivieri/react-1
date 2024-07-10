import { useState } from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

function AddComment({ asin, loadComments}) {

  const initialFormState = {
    rate: "",
    comment: "",
    elementId: asin
  };
  
  const [formValue, setFormValue] = useState(initialFormState);
  const handleChange = (event) => {
    setFormValue({ ...formValue, [event.target.name]: event.target.value });
  };



  const handleSaveComment = async () => {
    
    try{
    const response = await fetch(`https://striveschool-api.herokuapp.com/api/comments`, {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjhjMDdiYjNiMDQ4YTAwMTU5MDE3MjkiLCJpYXQiOjE3MjA0NTMwNTEsImV4cCI6MTcyMTY2MjY1MX0.QKHvKhNRevprCC09YfHposyES6FxvVVOjrNcGlPUyUI",
        },
        method: "POST",
        body: JSON.stringify(formValue),
      }
    )
    
    if(response.ok){
      loadComments();
      setFormValue(initialFormState)
      alert("Commento inserito correttamente")
    } else{
      alert("Inserisci un numero da 1 a 5")}
  }
    catch(error){
      alert("Errore" + error)
    }
    
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
          value = {formValue.rate}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Your Comment</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          name="comment"
          onChange={handleChange}
          value = {formValue.comment}
        />
      </Form.Group>
      <Button variant="primary" onClick={handleSaveComment}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-floppy2-fill" viewBox="0 0 16 16">
  <path d="M12 2h-2v3h2z"/>
  <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v13A1.5 1.5 0 0 0 1.5 16h13a1.5 1.5 0 0 0 1.5-1.5V2.914a1.5 1.5 0 0 0-.44-1.06L14.147.439A1.5 1.5 0 0 0 13.086 0zM4 6a1 1 0 0 1-1-1V1h10v4a1 1 0 0 1-1 1zM3 9h10a1 1 0 0 1 1 1v5H2v-5a1 1 0 0 1 1-1"/>
</svg>
      </Button>
    </Form>
    
  );
}

export default AddComment;
