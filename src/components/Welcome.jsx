import '../App.css';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

function Welcome(){
    const [show, setShow] = useState(true);

  return (
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Libri Horror</Alert.Heading>
        
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Chiudimi
          </Button>
        </div>
      </Alert>

      {!show && <Button variant='outline-success' onClick={() => setShow(true)}>Mostra Alert</Button>}
      <h1>Books</h1>
    </>
  ); 
    
}

export default Welcome