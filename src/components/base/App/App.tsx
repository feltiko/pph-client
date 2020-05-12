import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ClientContextProvider } from 'react-fetching-library';

import { Client } from '../../../api/Client';

import routes from '../../../routes';

function App() {
  return (
    <ClientContextProvider client={Client}>
      <Router>
        <Switch>
          {routes.map(route => (
            <Route path={route.path} key={route.path} component={route.component} />
          ))}
        </Switch>
      </Router>
    </ClientContextProvider>
  );
}

export default App;
