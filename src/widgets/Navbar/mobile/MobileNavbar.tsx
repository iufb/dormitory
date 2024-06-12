import { LocaleChanger } from "@/features";
import { useOnClickOutside } from "@/shared/hooks";
import { Contacts } from "@/shared/ui";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Menu } from "../menu/Menu";
import styles from "./MobileNavbar.module.css";

export const MobileNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const ref = useRef(null);
  const path = usePathname();
  const mouseActionDelay = (func: () => void) => {
    setTimeout(func, 400);
  };
  useEffect(() => {
    if (expanded) {
      setExpanded(false);
    }
  }, [path]);
  useOnClickOutside(ref, () => setExpanded(false));
  return (
    <nav
      ref={ref}
      className={clsx(styles.nav, expanded ? styles.expanded : styles.normal)}
    >
      {!expanded && <LocaleChanger />}
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
        <div className={styles.menu}>
          <Menu isMobile />
          <Contacts />
        </div>
      )}
    </nav>
  );
};
