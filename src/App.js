import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./pages/AllTheBooks";
import Horror from "./components/books/horror.json";
import { useContext, useState } from "react";
import { ThemeContext } from "./context/ThemeContextProvider";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import BookDetails from "./pages/BookDetails";

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
    <BrowserRouter>
      <div className={theme === "light" ? "App" : "bg-dark text-light App"}>
        <MyNav filter={filter} input={input} />
        <Welcome input={input} />
        <Routes>
          <Route path="/" element= {<AllTheBooks libriFiltrati={libriFiltrati} />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/*" element={<Navigate to ="/404" />} />
          <Route path="/details/:asin" element={<BookDetails libriFiltrati={libriFiltrati}/>} />
        </Routes>
        <MyFooter />
      </div>
    </BrowserRouter>
  );
}

export default App;
