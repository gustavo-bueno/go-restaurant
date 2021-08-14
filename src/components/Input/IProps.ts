import { HTMLProps } from 'react';
import { IconType } from 'react-icons/lib';

export interface IProps extends HTMLProps<HTMLInputElement> {
  name: string;
  icon?: IconType;
}

export interface IStyleProps {
  isFocused: boolean;
  isFilled: boolean;
}
