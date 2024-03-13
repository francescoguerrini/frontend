import RowComponent from "./RowComponent";

const MultipleTable = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          <RowComponent />
        </tbody>
      </table>
    </div>
  );
};

export default MultipleTable;
