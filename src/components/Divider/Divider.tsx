import React from "react";
import cn from "classnames";
import { DividerProps } from "./Divider.props";
import styles from "./Divider.module.css";

export const Divider = ({ className, ...props }: DividerProps): JSX.Element => {
  return <hr className={cn(styles.hr, className)} {...props} />;
};
