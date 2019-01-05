import React, {Component} from "react";
//Bootstrap parts
import Wrapper from "../Wrapper";
import Container from "../../Container";
import Row from "../../Row";
import Column from "../../Column";
// import API from "../../../../routes/apiRoutes"
//Chart js
// var Chart = require('chart.js');
// var ctx = document.getElementById("myChart");
// var myChart = new Chart(ctx, {
//     type: 'line',
//     data: [1,2,3,4,5,6,7,8,9,10],
//     options: {
//         scales: {
//             yAxes: [{
//                 stacked: true
//             }]
//         }
//     }
// });

class Stocks extends Component {
  // allCurrencies = query => {
  //   API.allCryptoCoins
  // }

  render () {
    return (
      <Container>
        <Row>
          <Column size="md-6">
            <h1 className="text-left">All Currencies</h1>
            <Container>
            <button type="button" class="btn btn-dark" >Secondary</button>
            </Container>
          </Column>
          <Column size="md-6">
            <h1 className="text-right">Stock Graph</h1>
          </Column>
        </Row>
        <Row>
          <Column size="md-6">
            <h1 className="text-left">Stock Description</h1>
          </Column>
          <Column size="md-6">
            <h1 className="text-right">User Chosen Stocks</h1>
          </Column>
        </Row>
      </Container>   
    )
  }
}

export default Stocks;