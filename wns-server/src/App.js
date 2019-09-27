import React from 'react';
import './App.css';
import {HashRouter,Route,Switch} from "react-router-dom";

import Login from './page/login/Login'
import Start from "./page/start"





function App() {
  return (
    <div className="App">
      <HashRouter>
          <Switch>
              <Route exact path="/" component={Login}></Route>
              <Route path="/start" component={Start}></Route>
          </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
