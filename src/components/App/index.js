import React from 'react';
import PropTypes from 'prop-types';

// IMPORTS DE ESTILOS E IMAGENES:
import './style.scss';
import logo from './img/logo.svg';

const App = ({routes}) => (
  <div className="app">
    <header className="app-header">
      <img src={logo} className="app-logo" alt="logo" />
      <h2>
        Consult your Transactions
      </h2>
    </header>
    <main>
      {routes}
    </main>
  </div>
);

App.propTypes = {
  routes: PropTypes.object.isRequired
};

export default App;
