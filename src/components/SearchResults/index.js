import React from "react";
import Card from "../Card";
import "./style.css";

function SearchResults(props) {
  return (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Image</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Email</th>
          <th scope="col">Age</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        {props.results.map(result => (
          <Card props={result} key={result.id} />
        ))}
      </tbody>
    </table>
  );
}

export default SearchResults;
