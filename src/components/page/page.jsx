import React from 'react';
import Header from "../header/header";
import classnames from "classnames";
import {PageType} from "../../const.js";
import pt from 'prop-types';

const Page = (props) => {
  const {type, children} = props;
  const className = classnames(`page`, {
    'page--gray': type === PageType.MAIN || type === PageType.LOGIN,
    'page--login': type === PageType.LOGIN,
    'page--main': type === PageType.MAIN
  });

  return (
    <div className={className}>
      <Header/>
      {children}
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
