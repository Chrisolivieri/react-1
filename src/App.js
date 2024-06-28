import './App.css';
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome';
import Counter from './components/Counter';
import AllTheBooks from './components/AllTheBooks';

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <Counter />
      <MyFooter />
      </>
  );
}

export default App;
