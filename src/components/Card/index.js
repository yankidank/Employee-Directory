import React from "react";
import "./style.css";

function Card(props) {
  return (
    <tr key={props.props.id}>
      <th scope="row">#</th>
      <th><img src={props.props.image} style={{ height:'50px', width:'50px' }}/></th>
      <th>{props.props.firstname}</th>
      <th>{props.props.lastname}</th>
      <th>{props.props.email}</th>
      <th>{props.props.age}</th>
      <th>{props.props.location.city}, {props.props.location.state}</th>
    </tr>
  );
}

export default Card;
