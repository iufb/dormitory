"use client";
import clsx from "clsx";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconBaseProps } from "react-icons";
import { FaBook, FaHome, FaRegListAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import styles from "./Menu.module.css";
interface MenuProps {
  isMobile: boolean;
  expanded?: boolean;
  onPress?: () => void;
}
type Link = {
  icon: (props: IconBaseProps) => JSX.Element;
  label: string;
  path: string;
};
export const links: Link[] = [
  { icon: (props) => <FaHome {...props} />, label: "first", path: "/" },
  {
    icon: (props) => <FaBook {...props} />,
    label: "second",
    path: "/rules",
  },
  {
    icon: (props) => <FaRegListAlt {...props} />,
    label: "third",
    path: "/submitting",
  },
  {
    icon: (props) => <FaMagnifyingGlass {...props} />,
    label: "forth",
    path: "/status",
  },
  {
    icon: (props) => <IoIosContacts {...props} />,
    label: "fifth",
    path: "/contacts",
  },
];
export const Menu = ({ expanded, onPress, isMobile }: MenuProps) => {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];
  const t = useTranslations("navigation");
  return (
    <ul className={styles.linkList}>
      {links.map(({ icon, label, path }) => {
        const isActive = () => {
          if (path === "/") {
            return pathname === `/${locale}`;
          }
          return pathname === `/${locale}${path}`;
        };

        return (
          <Link
            onClick={onPress}
            href={"/" + locale + path}
            key={label}
            className={clsx(styles.link, isActive() && styles.active)}
          >
            {icon({ size: isMobile ? 40 : 45 })}
            {isMobile ? (
              <span className={styles.label}>{t(label)}</span>
            ) : (
              expanded && <span className={styles.label}>{t(label)}</span>
            )}
          </Link>
        );
      })}
    </ul>
  );
};
