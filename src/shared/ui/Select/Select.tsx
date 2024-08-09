import { ChangeEvent, memo, SelectHTMLAttributes } from 'react';
import { classNames } from 'shared/lib/classNames';
import classes from './Select.module.scss';

export type IOption = {
  value: string;
  label: string;
};

interface ISelect extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'onChange' | 'value'> {
  options?: IOption[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
  placeholder?: string;
}

export const Select = memo((props: ISelect) => {
  const { options, value, onChange, className, placeholder, ...otherProps } = props;

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange?.(e.target.value);
  };

  return (
    <select
      className={classNames(classes.Select, {}, className)}
      required
      onChange={handleChange}
      value={value ?? ''}
      {...otherProps}
    >
      <option value='' disabled hidden>
        {placeholder}
      </option>
      {options?.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
});
Select.displayName = 'Select';
