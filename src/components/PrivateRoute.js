import React from 'react';
import Datafetch from './Datafetch';
import { Route, Redirect } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to="/datafetch" />
        )
      }
    />
  );
};

export default PrivateRoute;
