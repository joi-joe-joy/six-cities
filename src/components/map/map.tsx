import * as React from "react";
import {PageType} from "../../types";
import classnames from "classnames";

interface Props {
  type: PageType.PROPERTY | PageType.MAIN;
  children: React.ReactNode;
}

const Map: React.FC<Props> = (props: Props) => {
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

export default Map;
