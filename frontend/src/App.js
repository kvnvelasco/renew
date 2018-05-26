import React, { Component } from 'react';
import './App.css';
import MyAccount from './pages/MyAccount'
import Procurement from './pages/Procurement'
import OrdersPickups from './pages/Orders_pickups'
import Home from './pages/Home'
import { Switch, NavLink, Route } from 'react-router-dom'
import Toaster from './toast/toasters'
import { connect } from 'react-redux'
import store from './store/store'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavLink to="/" >
          Home
        </NavLink>
        <NavLink to="/procurement" >
          Procurement
        </NavLink>
        <NavLink to="/OrdersPickups" >
          Orders/Pickups
        </NavLink>
        <NavLink to="/MyAccount" >
          My Account
        </NavLink>
        <div>
          <Switch>
            <Route path="/procurement" component={Procurement} />
            <Route path="/OrdersPickups" component={OrdersPickups} />
            <Route path="/MyAccount" component={MyAccount} />
            <Route path="/" component={Home} exact />
          </Switch>
        </div>
        <Toaster/>
      </div>
    );
  }
}

export default App
