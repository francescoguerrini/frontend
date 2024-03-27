import datas from "./datas";

const RowComponent = () => {
  const data = datas;

  return (
    <tr>
      {data.map((item) => (
        <td key={item.id}>name</td>
      ))}
    </tr>
  );
};

export default RowComponent;
