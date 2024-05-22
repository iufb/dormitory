"use client";
import { FaHome, FaBook, FaRegListAlt } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { DesktopNavbar } from "./desktop/DesktopNavbar";
import { MobileNavbar } from "./mobile/MobileNavbar";
import { useEffect, useState } from "react";
import { IconBaseProps, IconType } from "react-icons";

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
export const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const resize = () => {
      setIsMobile(window.innerWidth <= 500);
    };
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);
  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};
