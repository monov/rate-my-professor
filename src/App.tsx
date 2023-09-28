import "./App.css";
import SearchResultsList from "./components/SearchResultsList";
import SearchBar from "./components/Searchbar";
import { useState } from "react";


function App() {
  const [results, setResults] = useState<any[]>([]);

  return (
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults = {setResults}/>
        <SearchResultsList results = {results}/>
      </div>
    </div>
  );
}

export default App;
