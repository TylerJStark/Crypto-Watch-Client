import React, {Component} from "react";
import axios from 'axios';
import StockBtn from '../StockBtn';
//Bootstrap parts
import Wrapper from "../Wrapper";
import Container from "../../Container";
import Row from "../../Row";
import Column from "../../Column";

import API from "../../Utils/API";
import Chart from "../Chart";
import "./Stocks.scss"

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
  createBtns() {
    if (!this.state.allCurrencies) {
      return <div>Loading...</div>;
    } else {
      return this.state.allCurrencies.map((currency, index) =>
        <li key={index} className="menu__item">
        <a className="menu__link" href="#">
          <StockBtn key={index} index={index} stockClick={this.stockClick}>{currency.CoinInfo.FullName}</StockBtn>
        </a>
        </li>

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

  //Needed to dynamically change the chart based on the button clicked
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  };

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

<div className="admin">
  <header className="admin__header">
    <a className="logo">
      <h1><img src="assets/media/Crypto-Watch-logo.png">
      </img></h1>
    </a>
  </header>
  <nav className="admin__nav">
    <ul className="menu">
    {this.createBtns()}

    </ul>
  </nav>

  

  <main class="admin__main">
    <h2></h2>
    <div class="dashboard">
      <div class="dashboard__item">
        <div class="card-container__container">
        <div class="player-card">
  <div class="content">
  <header class="">
      <h1 className='currency'><div>Name: {this.state.stockFullName}</div></h1>
      <p class="currency"><div>Supply: {this.state.supply}</div></p>
      <p class="currency"><div>Total Volume Traded (24Hr): {this.state.volume}</div></p>
    </header>

  </div>
</div>
        </div>
      </div>
      <div class="dashboard__item dashboard__item--full">
        <div class="card-container__conatiner">
        <div className="player-card-chart">
        <div className="content">
        <Chart className="chart"
             chartData={this.state.chartData}/>
           </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  </div>
    )
  }
}

export default Stocks;