import React from 'react';
import './Infoboard.scss';

const Infoboard = props => (

    <div>
        <div class="caption" id="slider-caption">
        <div class="caption-heading">
            <h1>Lorem Ipsum</h1>
        </div>
        <div class="caption-subhead"><span>dolor sit amet, consectetur adipiscing elit. </span></div><a class="btn" href="#">Sit Amet</a>
        </div>
        <div class="left-col" id="left-col">
            <div id="left-slider"></div>
        </div>
        <div>
        <ul class="nav">
            <li class="slide-up"> <a href="#"></a></li>
            <li class="slide-down"> <a id="down_button" href="#"></a></li>
        </ul>
        </div>
    </div>

)

export default Infoboard;