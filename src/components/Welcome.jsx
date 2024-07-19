import "./Welcome.css";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";

function Welcome({ input }) {
  const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading className="text-center"><h1>Horror Books</h1></Alert.Heading>

        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>

      {!show && (
        <Button variant="outline-success" onClick={() => setShow(true)}>
          Show Title
        </Button>
      )}
      
      {input && <h6>Il valore ricercato è {input}</h6>}
    </>
  );
}

export default Welcome;
