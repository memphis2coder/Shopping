import React from 'react';
import './App.css';
import { Switch,Route,} from "react-router-dom";

// Pages
import LandingPage from './pages/LandingPage/LandingPage';
import Shirts from './pages/Shirts/Shirts';
import Pants from './pages/Pants/Pants';
import Shoes from './pages/Shoes/Shoes';

function App() {
  return (
      <div className="App">
        <Switch>
          <Route exact path='/'> <LandingPage /></Route>
          <Route path='/shirts'> <Shirts /></Route>
          <Route path='/pants'> <Pants /></Route>
          <Route path='/shoes'> <Shoes /></Route>
        </Switch>
      </div>
  );
}

export default App;
