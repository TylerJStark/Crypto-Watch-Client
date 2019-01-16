import React from "react";
import "./StockBtn.css";

const StockBtn = props => (
    <button type="button" value={props.index} onClick={() => props.stockClick(props.index)} className="btn btn-secondary">{props.children}</button>
)
export default StockBtn;