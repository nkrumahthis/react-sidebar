import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/pages/Home';
import Reports from './components/pages/Reports';
import Products from './components/pages/Products';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/reports' component={Reports}/>
          <Route path='/products' component={Products}/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
