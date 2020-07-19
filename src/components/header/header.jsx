import React from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {AuthStatus, AppRoute} from "../../const.js";
import {getAuthStatus, getAuthInfo} from "../../reducer/user/selectors.js";
import pt from 'prop-types';

const Header = (props) => {
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
                  {authStatus === AuthStatus.AUTH &&
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

Header.propTypes = {
  authStatus: pt.oneOf([AuthStatus.AUTH, AuthStatus.NO_AUTH]).isRequired,
  authInfo: pt.shape({
    avatarUrl: pt.string,
    email: pt.string.isRequired,
    id: pt.number.isRequired,
    isPro: pt.bool,
    name: pt.string.isRequired
  })
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state),
  authInfo: getAuthInfo(state)
});

export {Header};
export default connect(mapStateToProps)(Header);
