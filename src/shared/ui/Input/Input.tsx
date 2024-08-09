import type { ChangeEvent, InputHTMLAttributes } from 'react';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import classes from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;

interface IInput extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo((props: IInput) => {
  const { className, value, onChange, type = 'text', ...otherProps } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <input
      className={classNames(classes.Input, {}, className)}
      value={value}
      onChange={handleChange}
      type={type}
      {...otherProps}
    />
  );
});
Input.displayName = 'Input';
