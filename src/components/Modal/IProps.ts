import { ReactNode } from 'react';

export interface IProps {
  isOpen: boolean;
  setIsOpen: () => void;
  children: ReactNode;
}
