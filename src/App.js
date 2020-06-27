import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { Provider } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <Provider>
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
    </Provider>
  );
}

export default App;
