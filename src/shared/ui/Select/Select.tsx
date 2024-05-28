"use client";
import clsx from "clsx";
import styles from "./Select.module.css";
import { useRef, useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import { useOnClickOutside } from "@/shared/hooks";
interface SelectProps<T> {
  label: string;
  items: T[];
  onSelect: (item: T) => void;
  getValueString: (item: T) => string;
}
export function Select<T>({
  label,
  onSelect,
  getValueString,
  items,
}: SelectProps<T>) {
  const [opened, setOpened] = useState(false);
  const [selected, setSelected] = useState<T | null>(null);
  const ref = useRef(null);
  useOnClickOutside(ref, () => setOpened(false));
  return (
    <div className={styles.container} ref={ref}>
      <div className={styles.wrapper} onClick={() => setOpened(!opened)}>
        <span className={styles.label}>
          {selected ? getValueString(selected) : label}
        </span>
        {opened ? <GoTriangleUp /> : <GoTriangleDown />}
      </div>
      <ul className={clsx(styles.menu, opened ? styles.opened : styles.closed)}>
        {items.map((item, idx) => (
          <li
            onClick={() => {
              setOpened(false);
              setSelected(item);
              onSelect(item);
            }}
            key={idx}
          >
            {getValueString(item)}
          </li>
        ))}
      </ul>
    </div>
  );
}
