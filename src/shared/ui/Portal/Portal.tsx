import type { ReactNode } from 'react';
import { createPortal } from 'react-dom';

interface IPortal {
  children: ReactNode;
  element?: Element;
}

export const Portal = (props: IPortal) => {
  const { children, element = document.body } = props;

  return createPortal(children, element);
};
