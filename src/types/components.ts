import React from 'react';

export interface TextProps {
  color?: string;
  type?: 'normal' | 'title' | 'subTitle' | 'large' | 'medium' | 'semiSmall' | 'small' | 'xSmall' | 'message';
  tag?: 'span' | 'div' | 'p' | 'h1' | 'h2' | 'h3';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold';
  align?: 'left' | 'center' | 'right' | 'justify' | 'inherit';
  ellipsis?: boolean | number;
  bullet?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  children?: React.ReactNode;
  styled?: any;
  whiteSpace?: 'normal' | 'nowrap' | 'pre' | 'pre-line' | 'pre-wrap';
  auth?: any;
  fallback?: React.ReactNode;
  [key: string]: any;
}

export interface ButtonProps {
  type?: 'default' | 'primary' | 'primaryLine' | 'secondary';
  size?: 'chip' | 'xsmall' | 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  before?: React.ReactNode;
  after?: React.ReactNode;
  children?: React.ReactNode;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  auth?: any;
  fallback?: React.ReactNode;
  disabled?: boolean;
  [key: string]: any;
}

export interface AuthOptionalProps {
  auth?: any;
  fallback?: React.ReactNode;
}

export interface AccordionItem {
  id: string | number;
  title: React.ReactNode;
  content: React.ReactNode;
}

export interface AccordionProps extends AuthOptionalProps {
  items?: AccordionItem[];
  before?: React.ReactNode;
  placeholder?: string;
  title?: React.ReactNode;
  children?: React.ReactNode;
  defaultExpanded?: boolean;
  className?: string;
  style?: React.CSSProperties;
  [key: string]: any;
}
