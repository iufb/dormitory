"use client";
import { Button, Modal } from "@/shared/ui";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import styles from "./ShowStatistics.module.css";
import { getApplicationsByRole } from "@/shared/api";
import { getCookie } from "cookies-next";
import { faculties } from "@/shared/contants";
export const ShowStatistics = ({
  spec,
  end,
}: {
  spec: number;
  end: number;
}) => {
  const [show, setShow] = useState(false);
  const [stats, setStats] = useState<Record<string, number>>({});
  useEffect(() => {
    const token = getCookie("token");
    if (token)
      Promise.all([
        getApplicationsByRole("decan", token),
        getApplicationsByRole("medic", token),
        getApplicationsByRole("commandant", token),
      ])
        .then(([decanData, medicData, commandantData]) => {
          setStats({
            ...stats,
            decanLegal: decanData.filter((app) => app.facultet === faculties[0])
              .length,
            decanIt: decanData.filter((app) => app.facultet === faculties[1])
              .length,
            decanHuman: decanData.filter((app) => app.facultet === faculties[2])
              .length,
            medic: medicData.length,
            commandant: commandantData.length,
          });
        })
        .catch((error) => {
          // Handle any errors here
          console.error("Error fetching data:", error);
        });
  }, []);

  return (
    <>
      <Button
        className={styles.btn}
        onClick={() => setShow(true)}
        variant="contained"
        size="sm"
      >
        Посмотреть статистику
      </Button>
      {show && (
        <Modal
          className={styles.modal}
          closeIcon={
            <IoClose
              className={styles.close}
              size={30}
              onClick={() => setShow(false)}
            />
          }
        >
          <ul className={styles.list}>
            <li>Заселены -{end} </li>
            <li>
              На рассмотрении у специалиста по работе с молодежью - {spec}{" "}
            </li>
            <li>
              <ul className={styles.decan}>
                Деканаты :<li>Юридический факультет: {stats.decanLegal}</li>
                <li>Факультет информационных технологий : {stats.decanIt}</li>
                <li>Гуманитарный факультет : {stats.decanHuman}</li>
              </ul>
            </li>
            <li>У медика - {stats.medic} </li>
            <li>У комменданта- {stats.commandant} </li>
            <li>
              Всего заявок -{" "}
              {Object.keys(stats).reduce(
                (acc, value) => acc + stats[value],
                0,
              ) +
                spec +
                end}
            </li>
          </ul>
        </Modal>
      )}
    </>
  );
};
