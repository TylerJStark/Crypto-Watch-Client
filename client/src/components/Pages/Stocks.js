import React, {Component} from "react";
import axios from 'axios';
import StockBtn from '../StockBtn';
//Bootstrap parts
import Wrapper from "../Wrapper";
import Container from "../../Container";
import Row from "../../Row";
import Column from "../../Column";

import API from "../../utils/API";
import Chart from "../Chart";
import ListGroup from "../ListGroup";
import WatchlistBtn from "../WatchlistBtn";

class Stocks extends Component {

  state = {
    allCurrencies: [],
    activeStockIndex: {},
    activeStock: {},
    stockData: [],
    stockFullName: {},
    supply: {},
    volume: {}
  }

  componentDidMount() {
    this.getAllCoins();
    this.getChartData();
  }

  getAllCoins() {
    API.allCurrencies()
      .then(res => this.setState({ allCurrencies: res.data.Data, activeStock: res.data.Data[0].CoinInfo.Name }))
      .catch(err => console.log(err));
  }

  //Get one coin's info
  getInfo = query => {
    API.coinInfo(query)
      .then(res => {
        console.log(res);
        this.setState({
          stockFullName: res.data.Data[0].CoinInfo.FullName,
          supply: res.data.Data[0].ConversionInfo.Supply,
          volume: res.data.Data[0].ConversionInfo.TotalVolume24H
        })
      })
  }

  //Gets one coin from API
  getSpecificCoin = query => {
    API.specificCoin(query)
      .then(res => {
        console.log(res);
        console.log("-------------------------------------------------------------------------------------------");
        console.log(res.data.Data);
        let valueArr = [];
        for(var i=0 ; i < 10 ; i++){
          valueArr.push(res.data.Data[i].open);
        }
        this.setState({stockData: valueArr},
          function(){console.log(this.state.stockData)});
      })
      .catch(err => console.log(err));
  }
  
  //Creating all the buttons with a cryptocurreny name on it
  createStocks() {
    if (!this.state.allCurrencies) {
      return <div>Loading...</div>;
    } else {
      return this.state.allCurrencies.map((currency, index) =>
        <ListGroup key={index} index={index} stockClick={this.stockClick}>{currency.CoinInfo.FullName}</ListGroup>
      )
    }
  }

  //Handling the OnClick for each button
  stockClick = index => {
    this.setState({
      activeStockIndex: index,
      activeStock: this.state.allCurrencies[index].CoinInfo.Internal
    },function() {
      console.log(this.state.activeStock);
      this.getChartData();
      this.getInfo(this.state.activeStock);
    });
  };

  //Button click to add buttons to watchlist
  watchClick() {
    console.log('WatchClick working');
    //Push to database
    // this.watchlist();
  }

  // watchlist(){
    //Get stocks off database
    //Add stocks to watchlist
    // console.log('Watchlist render working');
  // }

  //Needed to dynamically change the chart based on the button clicked
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  };

  //Creating the actual chart
  getChartData(){
    this.getSpecificCoin(this.state.activeStock);
    this.setState({
      chartData:{
        labels: ['9 Hours Ago', '8 Hours Ago', '7 Hours Ago', '6 Hours Ago', '5 Hours Ago', '4 Hours Ago', '3 Hours Ago', '2 Hours Ago', 'Current'],
        datasets:[
            {
                label:this.state.activeStock,
                data:this.state.stockData,
                backgroundColor:['rgba(230, 126, 34, 1)','rgba(230, 126, 34, 1)','rgba(230, 126, 34, 1)','rgba(230, 126, 34, 1)','rgba(230, 126, 34, 1)','rgba(230, 126, 34, 1)']
            }
        ]
      }
    });
  };

  render () {
    return (
      <Container>
        <Row>
          <Column size="md-6">
            <h1 className="text-left">All Crypto Coins</h1>
            <div>{this.createStocks()}</div>
          </Column>
          <Column size="md-6">
            <h1 className="text-right">Stock Graph</h1>
            <Chart
              chartData={this.state.chartData}/>
          </Column>
        </Row>
        <Row>
          <Column size="md-6">
            <h1 className="text-left">Stock Info</h1>
            <div>Name: {this.state.stockFullName}</div>
            <div>Supply: {this.state.supply}</div>
            <div>Total Volume Traded (24Hr): {this.state.volume}</div>
            <WatchlistBtn watchClick={this.watchClick}/>
          </Column>
          <Column size="md-6">
            <h1 className="text-right">Watchlist</h1>
          </Column>
        </Row>
      </Container>   
    )
  }
}

export default Stocks;