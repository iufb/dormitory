"use client";
import Link from "next/link";
import styles from "./DesktopNavbar.module.css";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx";
import { links } from "../Navbar";
import { Menu } from "../menu/Menu";

export const DesktopNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const mouseActionDelay = (func: () => void) => {
    setTimeout(func, 200);
  };
  return (
    <nav
      className={clsx(styles.nav, expanded ? styles.expanded : styles.normal)}
      onMouseEnter={() => mouseActionDelay(() => setExpanded(true))}
      onMouseLeave={() => mouseActionDelay(() => setExpanded(false))}
    >
      <Menu isMobile={false} expanded={expanded} />
    </nav>
  );
};
