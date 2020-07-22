import * as React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AppRoute} from "../../const";
import {AuthStatus, AuthInfo} from "../../types";
import {getAuthStatus, getAuthInfo} from "../../reducer/user/selectors";

interface Props {
  authStatus: AuthStatus.AUTH | AuthStatus.NO_AUTH,
  authInfo: AuthInfo
}

const Header: React.FC<Props> = (props: Props) => {
  const {authStatus, authInfo} = props;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link
              to={AppRoute.MAIN}
              className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  to={authStatus === AuthStatus.AUTH ? AppRoute.FAVORITES : AppRoute.LOGIN}
                  className="header__nav-link header__nav-link--profile"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                  {authStatus === AuthStatus.AUTH && authInfo &&
                    <span className="header__user-name user__name">{authInfo.email}</span>
                  }
                  {authStatus === AuthStatus.NO_AUTH &&
                    <span className="header__login">Sign in</span>
                  }
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  authInfo: getAuthInfo(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
