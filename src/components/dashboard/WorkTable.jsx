import {
  Table as Ntable,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import PropTypes from "prop-types";

const rows = [
  {
    key: "1",
    name: "Cirio",
    role: "31/12/2023",
    status: "Tu",
  },
  {
    key: "2",
    name: "Parmalat",
    role: "31/12/2023",
    status: "Giulia Eredia",
  },
  {
    key: "3",
    name: "Monte Paschi",
    role: "31/12/2023",
    status: "Deborah Repossi",
  },
  {
    key: "4",
    name: "Panini Durini",
    role: "31/12/2023",
    status: "Valentina Guanziroli",
  },
];

const columns = [
  {
    key: "name",
    label: "Cliente",
  },
  {
    key: "role",
    label: "Data Evasione",
  },
  {
    key: "status",
    label: "Operatore",
  },
];

const WorkTable = () => {
  const classNames = {
    table: ["min-h-64", "rounded-md"],
    th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
  };
  return (
    <Ntable
      removeWrapper
      aria-label="Example table with dynamic content"
      classNames={classNames}
    >
      <TableHeader columns={columns}>
        {(column) => (
          <TableColumn key={column.key} dataIndex={column.key}>
            {column.label}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell className="text-[.6rem] md:text-tiny xl:text-sm">
                {item[columnKey]}
              </TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Ntable>
  );
};

WorkTable.propTypes = {
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
      role: PropTypes.string,
      status: PropTypes.string,
    })
  ),
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      label: PropTypes.string,
    })
  ),
};

export default WorkTable;
