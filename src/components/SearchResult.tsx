import React from "react";
import "./SearchResult.css";

export interface SearchResultProps {
  result: {
    name: string;
  };
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  const handleClick = () => {
    alert(`sent request to https://uni-hub/${result.name.toLowerCase().replace(/ /g, '')}`);
  };
  return (
    <div
      className={`search-result`}
      onClick={handleClick}
    >
      {result.name}
    </div>
  );
};

export default SearchResult;
