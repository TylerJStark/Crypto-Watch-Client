import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import NavTabs from "./components/NavTabs";
import landingpage from "./components/pages/landingpage";
import Biopage from "./components/pages/Biopage";
import heropage from "./components/pages/heropage";
import './components/App.css';
// import "./components/Script/landingpage";
import './components/heropage.css';
import './components/Biopage.scss';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={landingpage} />
        <Route exact path="/heropage" component={heropage} />
        <Route path="/Biopage" component={Biopage} />
      </div>
    </Router>
  );
}

export default App;
