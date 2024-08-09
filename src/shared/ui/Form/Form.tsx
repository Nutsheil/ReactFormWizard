import type { FormHTMLAttributes, ReactNode } from 'react';
import classes from './Form.module.scss';

interface IForm extends FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
  header?: string;
}

export const Form = (props: IForm) => {
  const { children, header, ...otherProps } = props;

  return (
    <div className={classes.Form}>
      {header && <div className={classes.header}>{header}</div>}
      <form {...otherProps}>{children}</form>
    </div>
  );
};
