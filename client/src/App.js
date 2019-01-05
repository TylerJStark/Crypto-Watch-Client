//React stuff
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
//Nav
import NavTabs from "./components/NavTabs";
//Pages
import Home from "./components/Pages/Home";
import Stocks from "./components/Pages/Stocks";
import About from "./components/Pages/About";

function App() {
    return (
      <Router>
        <div>
          <NavTabs />
          <Route exact path="/" component={Home} />
          <Route exact path="/stocks" component={Stocks} />
          <Route exact path="/about" component={About} />
        </div>
      </Router>
    );
}

export default App;