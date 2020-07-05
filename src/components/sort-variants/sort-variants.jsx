import React from 'react';
import pt from "prop-types";

const SortVariants = (props) => {
  const {children} = props;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      {children}
    </form>
  );
};

SortVariants.propTypes = {
  children: pt.oneOfType([
    pt.arrayOf(pt.node),
    pt.node
  ]).isRequired
};

export default SortVariants;
