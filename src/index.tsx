import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import rootReducer from "./state/reducers/index";

import * as ROUTES from "./constants/routes";

const store = createStore(rootReducer, applyMiddleware(thunk));

const routing = (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path={ROUTES.DASHBOARD} component={App}></Route>
      </Switch>
    </Router>
  </Provider>
);

ReactDOM.render(routing, document.getElementById("root"));
