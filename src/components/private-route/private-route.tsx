import * as React from 'react';
import {connect} from 'react-redux';
import {Route, Redirect, RouteProps} from "react-router-dom";
import {AppRoute} from "../../const";
import {AuthStatus} from "../../types";
import {getAuthStatus} from "../../reducer/user/selectors";

type Props = RouteProps & {
  render: () => React.ReactNode;
  authorizationStatus: AuthStatus.AUTH | AuthStatus.NO_AUTH;
}

const PrivateRoute: React.FC<Props> = (props: Props) => {
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

const mapStateToProps = (state) => ({
  authorizationStatus: getAuthStatus(state)
});

export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
