import React from "react";
import "./WatchlistBtn.css";

const WatchlistBtn = props => (
    <button type='button' className='btn btn-secondary' onClick={() => props.watchClick()}>Add to Watchlist</button>
)
  
export default WatchlistBtn;