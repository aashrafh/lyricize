import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Lyrics from "./components/Lyrics";
import { Provider } from "./context";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
function App() {
  return (
    <Provider>
      <Router basename="https://aashrafh.github.io/lyricize">
        <>
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/tracks/:id/lyrics" component={Lyrics} />
            </Switch>
          </div>
        </>
      </Router>
    </Provider>
  );
}

export default App;
