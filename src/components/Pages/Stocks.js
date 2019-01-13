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
  }

  getAllCoins() {
    API.allCurrencies()
      .then(res => this.setState({ allCurrencies: res.data.Data, activeStock: res.data.Data[0].CoinInfo.Name }))
      .catch(err => console.log(err));
  }
  
  // getInfo = query => {
  //   API.coinInfo(query)
  //     .then(res => {
  //       console.log(res);
  //       this.setState({
  //         stockFullName: res.data.Data[0].CoinInfo.FullName,
  //         supply: res.data.Data[0].ConversionInfo.Supply,
  //         volume: res.data.Data[0].ConversionInfo.TotalVolume24H
  //       })
  //     })
  // }

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
    });
  };

  //Needed to dynamically change the chart based on the button clicked
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  };

  componentWillMount(){
    this.getChartData();
  };

  getChartData(){
    this.getSpecificCoin(this.state.activeStock);
    // this.getInfo(this.state.activeStock);
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
    <a href="#" className="logo">
      <h1><img src="assets/media/Crypto-Watch-logo.png">
      </img></h1>
    </a>
    <div className="toolbar">
      <button className="btn btn--primary">Stock button</button>
      <a href="#" className="about">
        About
      </a>
      <a href="#" className="logout">
        Log Out
      </a>
    </div>
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
  <img src="http://placehold.it/75x75/808080/000000"></img>
			<h1>Crypto-Watch</h1>
      <p><div>Name: {this.state.stockFullName}</div></p>
      <p><div>Supply: {this.state.supply}</div></p>
      <p><div>Total Volume Traded (24Hr): {this.state.volume}</div></p>

  </div>
</div>
        {/* <div className="stockdisc">
              <h1 className="text-left">Stock Description</h1>
             <div>Name: {this.state.stockFullName}</div>
             <div>Supply: {this.state.supply}</div>
             <div>Total Volume Traded (24Hr): {this.state.volume}</div>
           </div> */}
        </div>
      </div>
      <div class="dashboard__item">
        <div class="card-container__container">
        <div className="player-card">
        <div className="content">
        <img src="http://placehold.it/75x75/808080/000000"></img>
			<h1>Crypto-Watch</h1>
          <strong>81.712</strong> Doohickeys
        </div>
        </div>
      </div>
      </div>
      <div class="dashboard__item dashboard__item--full">
        <div class="card-container__conatiner">
        <div className="player-card">
        <div className="content">
        <Chart className="chart"
             chartData={this.state.chartData}/>
           </div>
          </div>
        </div>
      </div>
    </div>
    <p>read more about this in <a href="https://mxb.at/blog/css-grid-admin-dashboard/">this blogpost</a>.</p>
  </main>
  </div>



//       <div className="jumbotron jumbotron-fluid background">
//       <Container>
//         <Row>
//           <Column size="md-6">

//           {/* <div class="navbar">
//   <div class="item">
//     <div class="fa fa-user"></div>
//     <div class="label">Bitcoin</div>
//   </div>
//   <div class="item">
//     <div class="fa fa-picture-o"></div>
//     <div class="label">Photos</div>
//   </div>
//   <div class="item">
//     <div class="fa fa-bell"></div>
//     <div class="label">Notifications</div>
//   </div>
//   <div class="item">
//     <div class="fa fa-wrench"></div>
//     <div class="label">Setting</div>
//   </div>
//   <div class="item">
//     <div class="fa fa-wrench"></div>
//     <div class="label">Setting</div>
//   </div>
//   <div class="item">
//     <div class="fa fa-wrench"></div>
//     <div class="label">Setting</div>
//   </div>
//   <div class="item">
//     <div class="fa fa-wrench"></div>
//     <div class="label">Setting</div>
//   </div>
//   <div class="item">
//     <div class="fa fa-search"></div>
//     <div class="label">Search</div>
//   </div>
//   <div class="item">
//     <div class="fa fa-search"></div>
//     <div class="label">Search</div>
//   </div>
//   <div class="item">
//     <div class="fa fa-power-off"></div>
//     <div class="label">Logout</div>
//   </div>

// </div> */}

// {/* Header & Logo */}
// {/* <div class="admin">
//   <header class="admin__header">
//     <a href="#" class="logo">
//       <h1>GridAdmin</h1>
//     </a>
//     <div class="toolbar">
//       <button class="btn btn--primary">Add New Plumbus</button>
//       <a href="#" class="logout">
//         Log Out
//       </a>
//     </div>
//   </header> */}




//           <div className="list">
//             <h1 className="text-left">All Crypto Coins</h1>
//             <div>{this.createBtns()}</div>
//           </div>
//           </Column>
//           <Column size="md-6">
//           <div className="charthead">
//             <h1 className="text-right">Stock Graph</h1>
//             <Chart className="chart"
//               chartData={this.state.chartData}/>
//           </div>
//           </Column>
//         </Row>
//         <Row>
//           <Column size="md-6">
//           <div className="stockdisc">
//             <h1 className="text-left">Stock Description</h1>
//             <div>Name: {this.state.stockFullName}</div>
//             <div>Supply: {this.state.supply}</div>
//             <div>Total Volume Traded (24Hr): {this.state.volume}</div>
//           </div>
//           </Column>
//           <Column size="md-6">
//           <div className="userstocks">
//             <h1 className="text-right">User Chosen Stocks</h1>
//           </div>
//           </Column>
//         </Row>
//       </Container>   
//     </div>
    )
  }
}

export default Stocks;