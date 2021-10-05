import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './Componants/Header/Header';
import Home from './Componants/Home/Home';
import Servicess from './Componants/Serviceses/Servicess';
import About from './Componants/About/About';
import Details from './Componants/Details/Details';
import Archivement from './Componants/Archivement/Archivement';
import NotFound from './Componants/NotFound/NotFound';
import Footer from './Componants/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/service">
            <Servicess></Servicess>
          </Route>
          <Route path="/archivement">
            <Archivement></Archivement>
          </Route>
          <Route path="/details">
            <Details></Details>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
