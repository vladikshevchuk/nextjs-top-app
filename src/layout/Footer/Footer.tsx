import React from "react";
import cn from 'classnames';
import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import { format } from "date-fns";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(styles.footer, className)} {...props}>
      <div>OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены</div>
      <a href="#">Пользовательское соглашение</a>
      <a href="#">Политика конфиденциальности</a>
    </footer>
  );
};

