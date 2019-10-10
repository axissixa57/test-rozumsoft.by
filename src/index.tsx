import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import store from './redux/store';
import "./styles/index.css";
// import App from './App';
import App from "./test";

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
