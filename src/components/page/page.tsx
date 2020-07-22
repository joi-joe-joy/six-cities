import * as React from 'react';
import * as classnames from "classnames";
import Header from "../header/header";
import Footer from "../footer/footer";
import {PageType} from "../../types";

interface Props {
  type: PageType.MAIN | PageType.LOGIN | PageType.FAVORITES_EMPTY | PageType.PROPERTY | PageType.FAVORITES,
  children: React.ReactNode
}

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

export default Page;
