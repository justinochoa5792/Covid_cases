import React from "react";
import Home from "./components/Home";
import Covid from "./components/Covid";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          component={(props) => <Home {...props} />}
        ></Route>
        <Route
          exact
          path="/covid"
          component={(props) => <Covid {...props} />}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
