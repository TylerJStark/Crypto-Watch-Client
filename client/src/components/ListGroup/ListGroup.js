import React from "react";
import "./ListGroup.css";

const ListGroup = props => (
  <ul id="listContain" className="list-group list-group-flush">
    <li className="list-group-item list-group-item-action">Various Currencies</li>
    <li className="list-group-item list-group-item-action">About the Currencies</li>
    <li className="list-group-item list-group-item-action">Recommended Portfolios</li>
    <li className="list-group-item list-group-item-action">About the Website</li>
    <li className="list-group-item list-group-item-action">The Creator</li>
  </ul>
)
  
export default ListGroup;