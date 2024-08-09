import { memo } from 'react';
import classes from './Loader.module.scss';

export const Loader = memo(() => (
  <div className={classes.Loader}>
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
    <div />
  </div>
));
Loader.displayName = 'Loader';
