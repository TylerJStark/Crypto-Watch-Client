import React from "react";
import "./StockBtn.scss";

const StockBtn = props => (
    <div className="">
    <button className="btn" value={props.index} onClick={() => props.stockClick(props.index)}>{props.children}</button>
    </div>
)
export default StockBtn;