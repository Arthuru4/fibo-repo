import React from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Home from "./Components/Home";
import Data from "./Components/Data";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <NavLink exact={true} activeClassName="is_active" to="/">
            Set Fibo
          </NavLink>
          <NavLink activeClassName="is_active" to="/data">
            Data
          </NavLink>
        </nav>

        <div className="App">
          <header className="App-header">
            <Switch>
              <Route path="/data">
                <Data />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </header>
        </div>
      </div>
    </Router>
  );
}

export default App;
