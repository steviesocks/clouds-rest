import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import HomePage from './pages/homepage/homepage.component';

const BootsPage = () => (
  <div>
    <h1>Boots Page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/boots' component={BootsPage} />
      </Switch>
    </div>
  );
}

export default App;
