import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';

import Home from './components/pages/Home';
import Reports from './components/pages/Reports';
import Products from './components/pages/Products';
import Team from './components/pages/Team';
import Messages from './components/pages/Messages';
import Support from './components/pages/Support';

function App() {
  return (
    <>
        <Sidebar/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/reports' component={Reports}/>
          <Route path='/products' component={Products}/>
          <Route path='/team' component={Team}/>
          <Route path='/messages' component={Messages}/>
          <Route path='/support' component={Support}/>
        </Switch>
    </>
  );
}

export default App;
