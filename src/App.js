import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/scss/bootstrap.scss';
import './App.scss';
import Portada from './views/Portada';
import Nosotros from './views/Nosotros';
import Contactanos from './views/Contactanos';

function App() {
  return (
    <Router>
        <Route exact path="/" component={Portada} />
        <Route path="/nosotros" component={Nosotros} />
        <Route path="/contactanos" component={Contactanos} />
    </Router>
  );
}

export default App;
