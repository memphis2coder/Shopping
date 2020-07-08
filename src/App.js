import React from 'react';
import './App.css';
import { Switch,Route,} from "react-router-dom";

// Pages
import LandingPage from './pages/LandingPage/LandingPage';
import ShirtsPage from './pages/ShirtsPage/ShirtsPage';
import Pants from './pages/Pants/Pants';
import Shoes from './pages/Shoes/Shoes';
import Cart from './pages/Cart/Cart';

function App() {
  return (
      <div className="App">
        <Switch>
          <Route exact path='/'> <LandingPage /></Route>
          <Route path='/shirts'> <ShirtsPage /></Route>
          <Route path='/pants'> <Pants /></Route>
          <Route path='/shoes'> <Shoes /></Route>
          <Route path='/cart'> <Cart /></Route>
        </Switch>
      </div>
  );
}

export default App;
