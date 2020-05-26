// packages
import React from "react";
import { Router, Switch, Route } from "react-router-dom";

// components
import Home from "../screens/Home";
import AllGiants from "../screens/AllGiants";
import GiantMap from "../screens/GiantMap";
import AboutGiant from "../screens/AboutGiant";

// utils
import history from "../utils/history.js";

/* Start of routes */
const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          exact
          path="/giants"
          render={(props) => <AllGiants {...props} />}
        />
        <Route
          exact
          path="/map/:firstname"
          render={(props) => <GiantMap {...props} />}
        />
        <Route
          exact
          path="/about/:firstname"
          render={(props) => <AboutGiant {...props} />}
        />
      </Switch>
    </Router>
  );
};

export default Routes;
