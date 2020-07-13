import React from "react";
import {PageType} from "../../const";
import classnames from "classnames";
import pt from 'prop-types';

const Map = (props) => {
  const {type, children} = props;
  const classNameMap = classnames(`map`, {
    'property__map': type === PageType.PROPERTY,
    'cities__map': type === PageType.MAIN
  });

  return (
    <section className={classNameMap}>
      {children}
    </section>
  );
};

Map.propTypes = {
  type: pt.string.isRequired,
  children: pt.oneOfType([
    pt.arrayOf(pt.node),
    pt.node
  ]).isRequired,
};

export default Map;
