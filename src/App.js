import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Timer from "./components/timer/Timer";
import Inputs from "./components/input/Input";

function App() {
  const [inputs, setInputs] = useState([]);
  return (
    <Router>
      <Switch>
        <Route
          path="/timer"
          component={(props) => <Timer {...props} inputs={inputs} />}
        />
        <Route
          path="/"
          component={(props) => (
            <Inputs {...props} inputs={(e) => setInputs(e)} />
          )}
        />
      </Switch>
    </Router>
  );
}

export default App;