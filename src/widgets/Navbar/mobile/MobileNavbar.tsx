import Link from "next/link";
import styles from "./MobileNavbar.module.css";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { links } from "../Navbar";

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
        <Image
          onClick={() => setExpanded(false)}
          src={"/icons/close.svg"}
          alt="close menu"
          className={styles.close}
          width={30}
          height={30}
        />
      ) : (
        <Image
          onClick={() => setExpanded(true)}
          src={"/icons/burger.svg"}
          alt="close menu"
          width={40}
          height={40}
          className={styles.burger}
        />
      )}
      {expanded && (
        <ul className={styles.linkList}>
          {links.map(({ icon, label, path }) => (
            <Link href={path} key={label} className={styles.link}>
              <Image
                className={styles.linkIcon}
                src={icon}
                alt={label}
                width={30}
                height={30}
              />
              <span className={styles.label}> {label}</span>
            </Link>
          ))}
        </ul>
      )}
    </nav>
  );
};
