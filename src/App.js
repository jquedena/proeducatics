import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/scss/bootstrap.scss';
import './App.scss';
import Header from './components/Header';
import Portada from './views/Portada';
import Nosotros from './views/Nosotros';

function App() {
  return (
    <Router>
      <div className="App">
        <Header
            titulo="proeducatics"
            ubicacionLogo="" />
        <Route exact path="/" component={Portada} />
        <Route path="/nosotros" component={Nosotros} />
      </div>
    </Router>
  );
}

export default App;
