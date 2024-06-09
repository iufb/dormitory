import Link from "next/link";
import styles from "./MobileNavbar.module.css";
import Image from "next/image";
import { Menu } from "../menu/Menu";
import { useState } from "react";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { headers } from "next/headers";

export const MobileNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const mouseActionDelay = (func: () => void) => {
    setTimeout(func, 400);
  };
  return (
    <nav
      className={clsx(styles.nav, expanded ? styles.expanded : styles.normal)}
    >
      {expanded ? (
        <IoClose
          aria-label="close menu"
          size={30}
          color="white"
          onClick={() => setExpanded(false)}
          className={styles.close}
        />
      ) : (
        <RxHamburgerMenu
          className={styles.burger}
          aria-label="burger"
          size={40}
          color="white"
          onClick={() => setExpanded(true)}
        />
      )}
      {expanded && <Menu isMobile />}
    </nav>
  );
};
