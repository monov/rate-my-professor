import "./App.css";
import SearchResultsList from "./components/SearchResultsList";
import SearchBar from "./components/SearchBar";
import { useState } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  const [results, setResults] = useState<any[]>([]);

  return (
    <div className="App">
      <NavBar />
      <div className="infop"></div>
      <div className="meet-page">
        <div className="search-bar-container">
          <div className="txt-wrapper">
            <h1>Welcome to Rate My Prefessor</h1>
            <p>Please type the Name of the Professor you are looking for!</p>
          </div>
          <SearchBar setResults={setResults} />
        </div>
        <SearchResultsList results={results} />
      </div>
      <div className="infop"></div>
      <Footer />
    </div>
  );
}

export default App;
