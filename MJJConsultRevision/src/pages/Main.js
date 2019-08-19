import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from "./Home";
import Navigation from "./Navigation";

class Main extends React.Component {
render() {
  return (
    <Router>
      <div>
        <Navigation />
        <Route path="/" exact component={Home} />
      </div>
    </Router>
  )
}
}

export default Main;