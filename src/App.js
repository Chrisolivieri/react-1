import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";
import Horror from "./components/books/horror.json";
import { useContext, useState } from "react";
import  { ThemeContext } from "./context/ThemeContextProvider";


function App() {
  const [input, setInput] = useState("");
  const [libriFiltrati, setLibriFiltrati] = useState(Horror);

  const { theme } = useContext(ThemeContext);

  const filter = (event) => {
    setInput(event.target.value);
    const filtrati = Horror.filter((book) => {
      return event.target.value.toLowerCase() === ""
        ? book
        : book.title.toLowerCase().includes(event.target.value.toLowerCase());
    });
    setLibriFiltrati(filtrati);
  };
  return (
    
   
      <div className={theme === "light" ? "App" : "bg-dark text-light App"}>
         
          <MyNav filter={filter} input={input}  /> 
          <Welcome input={input} />
          <AllTheBooks libriFiltrati={libriFiltrati} />
          <MyFooter />
        
      </div>
   
  );
}

export default App;
