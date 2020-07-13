import React from 'react';
import {connect} from "react-redux";
import {getAuthStatus} from "../../reducer/user/selectors.js";
import {AuthStatus} from "../../const.js";
import pt from 'prop-types';

const Header = (props) => {
  const {authStatus} = props;
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  {(authStatus === AuthStatus.AUTH) &&
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  }
                  {(authStatus === AuthStatus.NO_AUTH) &&
                    <span className="header__login">Sign in</span>
                  }
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  authStatus: pt.oneOf([AuthStatus.AUTH, AuthStatus.NO_AUTH]).isRequired
};

const mapStateToProps = (state) => ({
  authStatus: getAuthStatus(state)
});

export {Header};
export default connect(mapStateToProps)(Header);