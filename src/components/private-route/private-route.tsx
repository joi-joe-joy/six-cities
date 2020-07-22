import React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect} from "react-router-dom";
import {AuthStatus, AppRoute} from "../../const.js";
import {getAuthStatus} from "../../reducer/user/selectors.js";
import pt from 'prop-types';

const PrivateRoute = (props) => {
  const {exact, path, render, authorizationStatus} = props;

  return (
    <Route
      exact={exact}
      path={path}
      render={() => {
        return (
          authorizationStatus === AuthStatus.AUTH
            ? render()
            : <Redirect to={AppRoute.LOGIN}/>
        );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  exact: pt.bool.isRequired,
  path: pt.string.isRequired,
  render: pt.func.isRequired,
  authorizationStatus: pt.string.isRequired
};

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state)
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
