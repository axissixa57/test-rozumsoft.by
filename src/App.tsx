import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";

import { Auth, Home } from "./pages";

const App = (props: any) => {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path="/signin" component={Auth} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default App;
