import React from 'react';
import './App.css';
// import {Button} from 'antd'
import {BrowserRouter,Route,Switch} from "react-router-dom";

import Login from './page/login/Login'
import Start from "./page/start"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
              <Route exact path="/" component={Login}></Route>
              <Route path="/start" component={Start}></Route>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
