import clsx from "clsx";
import styles from "./StudentTable.module.css";
import { OpenDetailsButton } from "@/features";
import { Application } from "@/shared/api";
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
  applications: Application[] | null;
}
export const StudentTable = ({ applications }: StudentTableProps) => {
  return (
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
      {applications && applications.length > 0 ? (
        <tbody className={styles.body}>
          {applications.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={clsx(rowIndex % 2 == 0 ? styles.gray : styles.white)}
            >
              {columns.map((column, idx) => {
                return (
                  <td className={styles.cell} key={column.accessor}>
                    {FillTable(idx, row)}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      ) : (
        <p className={styles.noApplications}>Нет новых заявок.</p>
      )}
    </table>
  );
};

const FillTable = (idx: number, application: Application) => {
  switch (idx) {
    case 0:
      return idx + 1;
    case 1:
      return `${application.so_name} ${application.name}`;
    case 2:
      return application.tel;
    case 3:
      return <OpenDetailsButton id={application.iin_id} />;
  }
};
