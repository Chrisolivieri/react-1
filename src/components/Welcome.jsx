import '../App.css';
import Alert from 'react-bootstrap/Alert';

function Welcome(){
    return(
        <>
        <Alert variant="primary">
        <Alert.Heading>Libri horror</Alert.Heading>
        <p>
          Questo è un alert
        </p>
        
      </Alert>
      <h1>Books</h1>
      </>
    );
        
    
}

export default Welcome