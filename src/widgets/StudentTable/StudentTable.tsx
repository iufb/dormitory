import clsx from "clsx";
import styles from "./StudentTable.module.css";
const columns = [
  { Header: "№", accessor: "id" },
  { Header: "ФИО", accessor: "name" },
  { Header: "Дата", accessor: "date" },
  { Header: "Просмотр", accessor: "show" },
];
const data = [
  { id: 1, name: "John Doe", date: 28, show: "john@example.com" },
  { id: 2, name: "John Doe", date: 28, show: "john@example.com" },
  { id: 2, name: "John Doe", date: 28, show: "john@example.com" },
];
export const StudentTable = () => {
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
      <tbody className={styles.body}>
        {data.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            className={clsx(rowIndex % 2 == 0 ? styles.gray : styles.white)}
          >
            {columns.map((column) => (
              <td className={styles.cell} key={column.accessor}>
                {row[column.accessor as keyof typeof row]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
