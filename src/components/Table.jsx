import "../styles/Table.css";

function Table({ headers, data }) {
  const tableHeaders = headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));

  const tableHeaderColumnData = data.map((item, rowIndex) => (
    <tr key={"Row" + rowIndex}>
      {Object.keys(item).map((key, colIndex) => (
        <td key={"Col" + colIndex}>{item[key].toString()}</td>
      ))}
    </tr>
  ));

  return (
    <div id="table">
      <table>
        <thead>
          <tr>{tableHeaders}</tr>
        </thead>
        <tbody>{tableHeaderColumnData}</tbody>
      </table>
    </div>
  );
}

export default Table;
