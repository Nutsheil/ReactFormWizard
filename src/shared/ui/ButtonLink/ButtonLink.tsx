import type { ReactNode } from 'react';
import { memo } from 'react';
import { Link, To } from 'react-router-dom';
import { Button } from 'shared/ui/Button';
import classes from './ButtonLink.module.scss';

interface IButtonLink {
  to: To;
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}

export const ButtonLink = memo((props: IButtonLink) => {
  const { to, className, disabled, children } = props;

  return (
    <Link to={to} className={classes.ButtonLink}>
      <Button type='button' className={className} disabled={disabled}>
        {children}
      </Button>
    </Link>
  );
});
ButtonLink.displayName = 'ButtonLink';
