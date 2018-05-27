import './App.css';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navigation from './components/navigation';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import MyAccount from './pages/MyAccount';
import OrdersPickups from './pages/Orders_pickups';
import Procurement from './pages/Procurement';
import Toaster from './toast/toasters';
import List from './pages/List';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation/>
        <div className="main-container">
          <Switch>
            <Route path="/procurement" component={Procurement} />
            <Route path="/orders" component={OrdersPickups} />
            <Route path="/list" component={List} />
            <Route path="/MyAccount" component={MyAccount} />
            <Route path='/checkout' component={Checkout} />
            <Route path="/" component={Procurement} exact />
          </Switch>
        </div>
        <Toaster/>
      </div>
    );
  }
}

export default App
