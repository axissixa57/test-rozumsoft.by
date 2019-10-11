import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, Switch } from "react-router-dom";

import { Auth, Home } from "./pages";
import { AppState } from "./redux/reducers";

interface Props {
  isAuth: boolean
}

const App = ({isAuth}: Props) => {
  return (
    <div className="wrapper">
      <Switch>
        <Route exact path="/signin" component={Auth} />
        <Route
          path="/"
          render={() => (isAuth ? <Home /> : <Redirect to="/signin" />)}
        />
      </Switch>
    </div>
  );
};

export default connect((state: AppState) => ({ isAuth: state.user.isAuth }))(App);;
