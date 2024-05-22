"use client";
import Link from "next/link";
import styles from "./DesktopNavbar.module.css";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { links } from "../Navbar";

export const DesktopNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const mouseActionDelay = (func: () => void) => {
    setTimeout(func, 400);
  };
  return (
    <nav
      className={clsx(styles.nav, expanded ? styles.expanded : styles.normal)}
      onMouseEnter={() => mouseActionDelay(() => setExpanded(true))}
      onMouseLeave={() => mouseActionDelay(() => setExpanded(false))}
    >
      <ul className={styles.linkList}>
        {links.map(({ icon, label, path }) => (
          <Link href={path} key={label} className={styles.link}>
            <Image
              className={styles.linkIcon}
              src={icon}
              alt={label}
              width={45}
              height={45}
            />
            {expanded && <span className={styles.label}> {label}</span>}
          </Link>
        ))}
      </ul>
    </nav>
  );
};
