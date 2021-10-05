import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Assig/Header/Header';
import Home from './Assig/Home/Home';
import Servicess from './Assig/Serviceses/Servicess';
import About from './Assig/About/About';


function App() {
  return (
    <div>y
      <Router className="">
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Servicess></Servicess>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Servicess></Servicess>
          </Route>
          <Route path="/archivement">
          
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
