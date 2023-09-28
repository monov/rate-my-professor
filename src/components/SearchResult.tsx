import React from "react";
import "./SearchResult.css";

export interface SearchResultProps {
  result: {
    name: string;
  };
}

const SearchResult: React.FC<SearchResultProps> = ({ result }) => {
  return (
    <div
      className="search-result"
      onClick={() => {
        alert(`sent request to https://uni-hub/${result.name.toLowerCase().replace(/ /g, '')}`)
      }}
    >
      {result.name}
    </div>
  );
};

export default SearchResult;
