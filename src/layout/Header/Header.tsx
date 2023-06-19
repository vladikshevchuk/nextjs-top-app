import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { HeaderProps } from "./Header.props";
import styles from "./Header.module.css";
import cn from "classnames";
import { motion, useReducedMotion } from "framer-motion";
import Logo from "../logo.svg";
import { ButtonIcon } from "@/components/ButtonIcon/ButtonIcon";
import { Sidebar } from "../Sidebar/Sidebar";

export const Header = ({ className, ...props }: HeaderProps): JSX.Element => {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const shouldReduceMotion = useReducedMotion();
  const router = useRouter();

  const variants = {
    opened: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 20,
      },
    },
    closed: {
      opacity: shouldReduceMotion ? 1 : 0,
      x: "100%",
    },
  };

  useEffect(() => {
    setIsOpened(false);
  }, [router]);

  return (
    <header className={cn(styles.header, className)} {...props}>
      <Logo />
      <ButtonIcon
        className={styles.menuOpen}
        appearance="white"
        icon="menu"
        onClick={() => setIsOpened(true)}
      />
      <motion.div
        className={styles.mobileMenu}
        variants={variants}
        initial={"closed"}
        animate={isOpened ? "opened" : "closed"}
      >
        <Sidebar />
        <ButtonIcon
          className={styles.menuClose}
          appearance="white"
          icon="close"
          onClick={() => setIsOpened(false)}
        />
      </motion.div>
    </header>
  );
};
