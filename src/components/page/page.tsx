import React from 'react';
import Header from "../header/header";
import Footer from "../footer/footer";
import classnames from "classnames";
import {PageType} from "../../const.js";
import pt from 'prop-types';

const Page = (props) => {
  const {type, children} = props;
  const className = classnames(`page`, {
    'page--gray': type === PageType.MAIN || type === PageType.LOGIN,
    'page--login': type === PageType.LOGIN,
    'page--main': type === PageType.MAIN,
    'page--favorites-empty': type === PageType.FAVORITES_EMPTY,
  });

  return (
    <div className={className}>
      <Header/>
      {children}
      {(type === PageType.FAVORITES || type === PageType.FAVORITES_EMPTY) &&
        <Footer/>
      }
    </div>
  );
};

Page.propTypes = {
  type: pt.string.isRequired,
  children: pt.oneOfType([
    pt.arrayOf(pt.node),
    pt.node
  ]).isRequired
};

export default Page;
