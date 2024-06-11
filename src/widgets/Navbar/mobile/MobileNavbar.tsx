import Link from "next/link";
import styles from "./MobileNavbar.module.css";
import Image from "next/image";
import { Menu } from "../menu/Menu";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { headers } from "next/headers";
import { usePathname } from "next/navigation";

export const MobileNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const path = usePathname();
  const mouseActionDelay = (func: () => void) => {
    setTimeout(func, 400);
  };
  useEffect(() => {
    if (expanded) {
      setExpanded(false);
    }
  }, [path]);
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
