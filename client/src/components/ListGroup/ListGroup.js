import React from "react";
import "./ListGroup.css";

const ListGroup = props => (
  <ul id="listContain" className="list-group list-group-flush">
    <li value={props.index} onClick={() => props.stockClick(props.index)} className="list-group-item list-group-item-action">{props.children}</li>
  </ul>
)
  
export default ListGroup;