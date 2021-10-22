import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import AnotherScreen from "./AnotherScreen";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Switch>
          <Route exact={true} path="/" component={Home}></Route>
          <Route
            exact={true}
            path="/another-screen"
            component={AnotherScreen}
          ></Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
