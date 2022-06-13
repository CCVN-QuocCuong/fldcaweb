import React from "react";
import { Router } from "react-router-dom";
import Routes from "./routes";
import store from "./store";
import { Provider } from "react-redux";
import { history } from "helpers/common";
import "bootstrap/dist/css/bootstrap.min.css";
import Amplify from "aws-amplify";
import config from "./aws-exports";
import "assets/css/app.css";
Amplify.configure(config);

export default function App() {
  return (
    <Provider store={store}>
      <Router history={history}>
        <Routes />
      </Router>
    </Provider>
  );
}
