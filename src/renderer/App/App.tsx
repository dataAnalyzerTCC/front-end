import React from 'react';
import { Switch, Route, Redirect, HashRouter } from 'react-router-dom';
import Home from '../pages/Home';
import Sobre from '../pages/Sobre';
import Contato from '../pages/Contato';
import Sidebar from '../components/Sidebar';
import './App.global.css';
// eslint-disable-next-line import/order
import { CssBaseline } from '@material-ui/core';

export default function App() {
  return (
    <>
      <CssBaseline />
      <HashRouter>
        <Sidebar navigationEnabled />
        <Switch>
          <Route exact path="/" component={Home}>
            <Redirect to="/home" />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/contato" component={Contato} />
          <Route path="/sobre" component={Sobre} />
        </Switch>
      </HashRouter>
    </>
  );
}
