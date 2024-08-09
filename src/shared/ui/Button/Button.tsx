import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import classes from './Button.module.scss';

interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  disabled?: boolean;
  children?: ReactNode;
}

export const Button = memo((props: IButton) => {
  const { className, disabled, children, ...otherProps } = props;

  return (
    <button type='button' className={classNames(classes.Button, {}, className)} disabled={disabled} {...otherProps}>
      {children}
    </button>
  );
});
Button.displayName = 'Button';
