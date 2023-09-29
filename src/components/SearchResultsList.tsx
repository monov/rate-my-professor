import React from "react";
import "./SearchResultslist.css";
import SearchResult from "./SearchResult";

export interface SearchResultsListProps {
  results: any[];
}

const SearchResultsList: React.FC<SearchResultsListProps> = ({
  results,
  
}) => {
  return (
      <div className="results-list">
        {results.map((result, id) => {
          return <SearchResult result={result} key={id} />;
        })}
      </div>
  );
};

export default SearchResultsList;
