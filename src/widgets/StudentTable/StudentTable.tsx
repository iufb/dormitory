import styles from "./StudentTable.module.css";
const columns = [
  { Header: "№", accessor: "id" },
  { Header: "ФИО", accessor: "name" },
  { Header: "Дата", accessor: "date" },
  { Header: "Просмотр", accessor: "show" },
];
const data = [{ id: 1, name: "John Doe", date: 28, show: "john@example.com" }];
export const StudentTable = () => {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          {columns.map((column) => (
            <th key={column.accessor}>{column.Header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((column) => (
              <td key={column.accessor}>
                {row[column.accessor as keyof typeof row]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
