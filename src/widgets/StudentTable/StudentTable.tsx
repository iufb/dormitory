import { OpenDetailsButton } from "@/features";
import { Application } from "@/shared/api";
import clsx from "clsx";
import styles from "./StudentTable.module.css";
const columns = [
  { Header: "№", accessor: "id" },
  { Header: "ФИО", accessor: "name" },
  { Header: "Телефон", accessor: "phone" },
  { Header: "Просмотр", accessor: "show" },
];
const data = [
  { id: 1, name: "John Doe", date: 28, show: "john@example.com" },
  { id: 2, name: "John Doe", date: 28, show: "john@example.com" },
  { id: 3, name: "John Doe", date: 28, show: "john@example.com" },
];
interface StudentTableProps {
  applications: Application[];
}
export const StudentTable = ({ applications }: StudentTableProps) => {
  return (
    <div
      className={clsx(
        styles.wrapper,
        applications.length >= 14 && styles.overflow
      )}
    >
      <table className={styles.table}>
        <thead className={styles.head}>
          <tr>
            {columns.map((column) => (
              <th className={styles.th} key={column.accessor}>
                {column.Header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className={styles.body}>
          {applications
            .map((row, idx) => {
              return { ...row, id: idx + 1 };
            })
            .map((row, rowIndex) => {
              console.log(row, "?RROW>");

              return (
                <tr
                  key={rowIndex}
                  className={clsx(
                    rowIndex % 2 == 0 ? styles.gray : styles.white
                  )}
                >
                  {columns.map((column, idx) => {
                    console.log(rowIndex);
                    return (
                      <td className={styles.cell} key={column.accessor}>
                        {FillTable(idx, row)}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

const FillTable = (idx: number, application: Application & { id: number }) => {
  switch (idx) {
    case 0:
      return application.id;
    case 1:
      return `${application.so_name} ${application.name}`;
    case 2:
      return application.tel;
    case 3:
      return <OpenDetailsButton application={application} />;
  }
};
