import { ReactElement } from 'react';
import { Measures } from '../utils/measures';

const MeasuresComponent: React.FC<Measures> = ({
  pages,
  length,
  height,
  width,
}): ReactElement => {
  return (
    <>
      {pages && pages > 1 && `${pages} pages`}
      {pages && pages === 1 && `${pages} page`}
      {length && `${length} seconds`}
      {width && height && `${width}x${height}px`}
    </>
  );
};

export default MeasuresComponent;
