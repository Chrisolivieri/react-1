import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
// import Counter from './components/Counter';
import AllTheBooks from './components/AllTheBooks';
// import Text from './components/Text';
import Horror from './components/books/horror.json';
import { useState } from 'react';

function App() {
  const [input, setInput] = useState("");
  const [libriFiltrati, setLibriFiltrati] = useState(Horror);

  const filter = (event) => {
    setInput(event.target.value);
    const filtrati = Horror.filter((book) => {
      return event.target.value.toLowerCase() === "" ? book : book.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setLibriFiltrati(filtrati);
  };
  return (
    <>

      <MyNav filter={filter} input={input} />
      <Welcome input={input}  />
      <AllTheBooks libriFiltrati={libriFiltrati} />
      {/* <Counter />*/}
      {/* Possiamo passare qualsiasi tipo di dato nel componente: array, oggetti, funzioni... */}
      {/* <Text primaRiga="Prima riga testo props" secondoElemento={2} terzoElemento="Terzo elemento testo props" />
      <Text primaRiga="Seconda riga testo props" secondoElemento="Secondo elemento testo props " terzoElemento="Terzo elemento testo props" />
      <Text primaRiga="Terza riga testo props" secondoElemento="Terzo elemento testo props " terzoElemento="Terzo elemento testo props" /> */}
      <MyFooter />

    </>
  );
}

export default App;
