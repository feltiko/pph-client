import React from 'react';
import { Route, Redirect } from 'react-router-dom';

type ProtectedRouteTypes = {
  path: string;
  component: any;
  isLoggedIn: boolean;
};

export default function ProtectedRoute({ component, path, isLoggedIn }: ProtectedRouteTypes) {
  if (!isLoggedIn) {
    return <Redirect to="/" />;
  }

  return <Route path={path} render={(props) => React.createElement(component, props)} />;
}
