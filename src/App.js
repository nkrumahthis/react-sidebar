import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Sidebar/>
        <Switch>
          <Route exact path='/'/>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
