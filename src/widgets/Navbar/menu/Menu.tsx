import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Menu.module.css";
import { IconBaseProps } from "react-icons";
import { FaHome, FaBook, FaRegListAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
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
  { icon: (props) => <FaHome {...props} />, label: "Главная", path: "/" },
  {
    icon: (props) => <FaBook {...props} />,
    label: "Положение",
    path: "/rules",
  },
  {
    icon: (props) => <FaRegListAlt {...props} />,
    label: "Подача заявления",
    path: "/submitting",
  },
  {
    icon: (props) => <FaMagnifyingGlass {...props} />,
    label: "Статус заявления",
    path: "/status",
  },
];
export const Menu = ({ expanded, onPress, isMobile }: MenuProps) => {
  const pathname = usePathname();
  const locale = pathname.split("/")[1];

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
              <span className={styles.label}> {label}</span>
            ) : (
              expanded && <span className={styles.label}> {label}</span>
            )}
          </Link>
        );
      })}
    </ul>
  );
};
