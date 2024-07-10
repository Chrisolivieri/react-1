import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

function BasicExample({filter ,input}) {
    return (
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container fluid>
                <Navbar.Brand href="#home">Visualizza libri</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    
                </Navbar.Collapse>
                <InputGroup>
        <Form.Control onChange={filter} value={input} placeholder="Cerca libro" />
       
      </InputGroup>
      
            </Container>
            
        </Navbar>
    );
}

export default BasicExample;