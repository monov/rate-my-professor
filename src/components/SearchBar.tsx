import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./SearchBar.css";

export interface SearchBarProps {
  setResults: React.Dispatch<React.SetStateAction<any[]>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ setResults }) => {
  const [input, setInput] = useState("");
  const api: string = import.meta.env.VITE_API_BASE_URL;
  const apiKey: string = import.meta.env.VITE_API_KEY;
  async function fetchData(value: any) {
    try {
      const response = await fetch(`${api}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": apiKey,
        },
        body: JSON.stringify(value),
      });
      setResults(await response.json());
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value.toLocaleLowerCase());
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder="Type to search..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
