import React from 'react';
import './App.css';
import {Route,Switch,BrowserRouter} from 'react-router-dom' 

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={}></Route>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
