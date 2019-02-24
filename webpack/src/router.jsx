import React from "react";
import {Route, Switch} from "react-router";
import {ConnectedRouter} from 'connected-react-router';
import {history} from "./store.js";
import styles from './stylesheets/main.scss';

import Home from './containers/Home/Home';


const router = (
  <ConnectedRouter onUpdate={() => window.scrollTo(0, 0)} history={history}>
    <Switch>
      <Route exact path={"/"} component={Home}/>
    </Switch>
  </ConnectedRouter>
);

export {router};
