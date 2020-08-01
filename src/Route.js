import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import App from './App'
import Resto from './pages/resto/Resto'
export default function Routes() {
  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/restaurants">
            <Resto />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
    </Router>
  );
}
