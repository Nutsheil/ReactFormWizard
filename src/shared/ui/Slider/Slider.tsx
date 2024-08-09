import type { ChangeEvent, InputHTMLAttributes } from 'react';
import { memo } from 'react';
import { classNames } from 'shared/lib/classNames';
import classes from './Slider.module.scss';

type HTMLSliderProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value'>;

interface ISlider extends HTMLSliderProps {
  className?: string;
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onChange?: (value: number) => void;
}

export const Slider = memo((props: ISlider) => {
  const { className, value = 50, min = 0, max = 100, step = 1, onChange, ...otherProps } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange?.(Number(e.target.value));
  };

  return (
    <input
      type='range'
      step={step}
      min={min}
      max={max}
      value={value}
      onChange={handleChange}
      className={classNames(classes.Slider, {}, className)}
      {...otherProps}
    />
  );
});
Slider.displayName = 'Slider';
