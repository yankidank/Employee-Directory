import React from "react";
import "./style.css";

function SearchResults(props) {
  return (
    <ul className="list-group search-results">
      {props.results.map(result => (
        <li key={result.id} className="list-group-item">
          <h2>{result.firstname} {result.lastname}</h2>
          <h3>{result.email}</h3>
          <img alt="Employee" src={result.image} className="img-fluid" />
        </li>
      ))}
    </ul>
  );
}

export default SearchResults;
