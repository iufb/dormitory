import Link from "next/link";
import styles from "./MobileNavbar.module.css";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { links } from "../Navbar";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

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
      {expanded && (
        <ul className={styles.linkList}>
          {links.map(({ icon, label, path }) => (
            <Link
              href={path}
              key={label}
              className={styles.link}
              onClick={() => setExpanded(false)}
            >
              {icon({ size: 40 })}
              <span className={styles.label}> {label}</span>
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};
