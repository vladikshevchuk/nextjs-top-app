import React from "react";
import cn from "classnames";
import { motion } from "framer-motion";
import ArrowIcon from './arrow.svg';
import { ButtonProps } from "./Button.props";
import styles from "./Button.module.css";

export const Button = ({
  appearance,
  children,
  arrow = 'none',
  className,
  ...props
}: ButtonProps): JSX.Element => {
  return (
    <motion.button
      className={cn(styles.button, className, {
        [styles.primary]: appearance === "primary",
        [styles.ghost]: appearance === "ghost",
      })}
    whileHover={{ scale: 1.05}}
      {...props}
    >
      {children}
      {arrow !== 'none' && <span className={cn(styles.arrow, {
        [styles.down]: arrow === 'down'
      })}>
        <ArrowIcon />
      </span>}
    </motion.button>
  );
};
