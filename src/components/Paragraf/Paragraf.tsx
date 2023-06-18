import React from 'react';
import cn from 'classnames';
import { ParagrafProps } from './Paragraf.props';
import styles from "./Paragraf.module.css";

export const Paragraf = ({size = 'm', children, className, ...props}: ParagrafProps): JSX.Element => {
  return (
    <p className={cn(styles.text, className, {
      [styles.textS]: size === 's',
      [styles.textM]: size === 'm',
      [styles.textL]: size === 'l',
    })}
      {...props}
    >
      {children}
    </p>
  );
};