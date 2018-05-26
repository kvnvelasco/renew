import React, { Component } from 'react';
import './App.css';

import Navigation from './components/navigation'
import MyAccount from './pages/MyAccount'
import Procurement from './pages/Procurement.jsx'
import OrdersPickups from './pages/Orders_pickups'
import Home from './pages/Home'
import { Switch, NavLink, Route } from 'react-router-dom'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <div>
          <Switch>
            <Route path="/procurement" component={Procurement} />
            <Route path="/orders" component={OrdersPickups} />
            <Route path="/MyAccount" component={MyAccount} />
            <Route path="/" component={Home} exact />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
