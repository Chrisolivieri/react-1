import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
// import Counter from './components/Counter';
import AllTheBooks from './components/AllTheBooks';
// import Text from './components/Text';

function App() {
  return (
    <>

      <MyNav />
      <Welcome />
      <AllTheBooks />
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
