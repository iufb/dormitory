"use client";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { ChangeEvent, useState } from "react";
import styles from "./LocaleChanger.module.css";
import { IoIosArrowDown } from "react-icons/io";
export const LocaleChanger = () => {
  const router = useRouter();
  const params = useParams();
  const path = usePathname();

  const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    router.replace(`/${nextLocale}/${path.split("/").slice(2)}`);
  };
  return (
    <label className={styles.wrapper}>
      <select
        className={styles.select}
        value={params.locale}
        onChange={onSelectChange}
      >
        <option value="ru">RU</option>
        <option value="kz">KZ</option>
      </select>
    </label>
  );
};
