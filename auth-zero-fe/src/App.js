// src/App.js

import React from "react";
import NavBar from "./components/NavBar";

// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import ExternalApi from "./components/ExternalApi";
import AlterEgosApi from "./components/AlterEgosApi";
import HeroesApi from "./components/HeroesApi";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact />
          <PrivateRoute path="/profile" component={Profile} />
          <PrivateRoute path="/external-api" component={ExternalApi} />
          <PrivateRoute path="/alter-egos" component={AlterEgosApi} />
          <PrivateRoute path="/heroes" component={HeroesApi} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;