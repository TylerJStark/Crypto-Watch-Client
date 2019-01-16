import React from "react";
import "./Jumbotron.scss";

const Jumbotron = props => (
  
  // <div class="jumbotron jumbotron-fluid background">
    // <img src="/assets/media/Crypto-Watch-logo.png"/>
  <div class="container" id="container">
  <img className="homelogo" src="/assets/media/Crypto-Watch-logo.png"/>
  <div class="caption" id="slider-caption">
    <div class="caption-heading">
      <h1>Lorem Ipsum</h1>
    </div>
    <div class="caption-subhead"><span>dolor sit amet, consectetur adipiscing elit. </span></div><a class="btn" href="#">Sit Amet</a>
  </div>
  <div class="left-col" id="left-col">
    <div id="left-slider"></div>
  </div>
  <ul class="nav">
    <li class="slide-up"> <a href="#"></a></li>
    <li class="slide-down"> <a id="down_button" href="#"></a></li>
  </ul>
</div>
// </div>

      
    

)

export default Jumbotron;


