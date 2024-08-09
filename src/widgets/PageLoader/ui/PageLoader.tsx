import { memo } from 'react';
import { Loader } from 'shared/ui/Loader';
import classes from './PageLoader.module.scss';

export const PageLoader = memo(() => (
  <div className={classes.PageLoader}>
    <Loader />
  </div>
));
PageLoader.displayName = 'PageLoader';
