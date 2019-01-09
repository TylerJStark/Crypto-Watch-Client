import React from "react";
import "./StockBtn.css";

const StockBtn = props => (
    <button type="button" onClick={() => props.stockClick(props.index)} class="btn btn-secondary">{props.children}</button>
)
export default StockBtn;