import React, {Component} from "react";
import axios from 'axios';
import StockBtn from '../StockBtn';
//Bootstrap parts
import Wrapper from "../Wrapper";
import Container from "../../Container";
import Row from "../../Row";
import Column from "../../Column";

// import API from "../../Utils/API";
import Chart from "../Chart"

class Stocks extends Component {

  state = {
    allCurrencies: [],
    activeStock: {}
  }

  componentDidMount() {
    axios.get("/api/allCurrencies")
    .then((response)=>{
      console.log(response.data.data[0].name);
      console.log(typeof response.data);
      this.setState({
        allCurrencies: response.data,
        activeStock: response.data.data[0]
      });
      console.log(this.state.allCurrencies);
    })
  }

  writeNames() {
    if (!this.state.allCurrencies.data) {
      return <div>Loading...</div>;
    } else {
      return this.state.allCurrencies.data.map((currency, index) => 
        // <button key={index} clickEvent={this.setActiveStock(currency)}>{currency.name}</button>
        <ul>
          <StockBtn key={index}>{currency.name}</StockBtn>
        </ul>
      )
    }
  }

  stockClick = index => {
    console.log(index);
  }

  render () {
    return (
      <Container>
        <Row>
          <Column size="md-6">
            <h1 className="text-left">All Crypto Coins</h1>
            <ul>{this.writeNames()}</ul>
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