import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ClientContextProvider } from 'react-fetching-library';
import { useStoreon } from 'storeon/react';

import ProtectedRoute from '../ProtectedRoute';

import { Client } from '../../../api/Client';

import { State, Events } from '../../../store/structure';

import { routes, protectedRoutes } from '../../../routes';

function App() {
  const { isLoggedIn } = useStoreon<State, Events>('isLoggedIn');

  return (
    <ClientContextProvider client={Client}>
      <Router>
        <Switch>
          {protectedRoutes.map((route) => (
            <ProtectedRoute path={route.path} isLoggedIn={isLoggedIn} key={route.path} component={route.component} />
          ))}

          {routes.map((route) => (
            <Route path={route.path} key={route.path} component={route.component} />
          ))}
        </Switch>
      </Router>
    </ClientContextProvider>
  );
}

export default App;
