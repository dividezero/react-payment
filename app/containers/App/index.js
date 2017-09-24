/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import {Switch, Route} from 'react-router-dom';

import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import UserListPage from "../UserListPage/index";
import Dashboard from "../Dashboard/index";

export default function App() {
  return (
    <MuiThemeProvider>
      <div>
        <AppBar
          title="Payment App"
          iconClassNameRight="muidocs-icon-navigation-expand-more"
        />
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/users" component={UserListPage}/>
          <Route exact path="/me" component={Dashboard}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </div>
    </MuiThemeProvider>
  );
}
