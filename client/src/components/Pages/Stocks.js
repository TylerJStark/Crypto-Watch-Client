import React, {Component} from "react";
//Bootstrap parts
import Wrapper from "../Wrapper";
import Container from "../../Container";
import Row from "../../Row";
import Column from "../../Column";

import API from "../../Utils/API";
import Chart from "../Chart"

class Stocks extends Component {

  state = {
    allCurrencies:null
  }

  componentDidMount() {
    this.setState({allCurrencies:API.allCryptoCoins()});
  }

  render () {
    return (
      <Container>
        <Row>
          <Column size="md-6">
            <h1 className="text-left">All Crypto Coins</h1>
          </Column>
          <Column size="md-6">
            <h1 className="text-right">Stock Graph</h1>
            <Chart/>
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