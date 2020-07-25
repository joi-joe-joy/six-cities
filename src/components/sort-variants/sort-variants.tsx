import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

const SortVariants: React.FC<Props> = (props: Props) => {
  const {children} = props;
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      {children}
    </form>
  );
};

export default SortVariants;
