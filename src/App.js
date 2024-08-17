import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import LengthConverter from './components/LengthConverter';
import AreaConverter from './components/AreaConverter';
import VolumeConverter from './components/VolumeConverter';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/length">Length Converter</Link></li>
            <li><Link to="/area">Area Converter</Link></li>
            <li><Link to="/volume">Volume Converter</Link></li>
            <li><Link to="/currency">Currency Converter</Link></li>
          </ul>
        </nav>
        <Switch>
          <Route path="/length" component={LengthConverter} />
          <Route path="/area" component={AreaConverter} />
          <Route path="/volume" component={VolumeConverter} />
          <Route path="/currency" component={CurrencyConverter} />
          <Route path="/" exact>
            <h1>Welcome to Convertify</h1>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
