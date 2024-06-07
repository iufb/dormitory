"use client";
import clsx from "clsx";
import styles from "./Select.module.css";
import { useRef, useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { useOnClickOutside } from "@/shared/hooks";
interface SelectProps {
  label: string;
  items: string[];
  selected: string;
  onSelect: (item: string) => void;
}
export function Select({ label, selected, onSelect, items }: SelectProps) {
  const [opened, setOpened] = useState(false);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpened(false));
  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.wrapper} onClick={() => setOpened(!opened)}>
        <span className={styles.label}>{selected ? selected : label}</span>
        {opened ? <GoTriangleUp /> : <GoTriangleDown />}
      </div>
      <ul className={clsx(styles.menu, opened ? styles.opened : styles.closed)}>
        {items.map((item, idx) => (
          <li
            onClick={() => {
              setOpened(false);
              onSelect(item);
            }}
            key={idx}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
