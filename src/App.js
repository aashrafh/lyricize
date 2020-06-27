import React from "react";
import Navbar from "./components/layout/Navbar";
import Home from "./components/layout/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <div className="app">
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
