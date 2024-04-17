import { useState, useMemo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { edit } from "../../store/selectedRowsActions";

import {
  Tooltip,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Chip,
  Avatar,
} from "@nextui-org/react";
import TableActions from "./TableActions";
import TopContent from "./TopContent";
import BottomContent from "./BottomContent";
import { classNames } from "./ClassNames";

import {
  columns,
  pratiche,
  statusOptions,
  statusColorMap,
  INITIAL_VISIBLE_COLUMNS,
} from "../consts/table_data";

export default function ListaRichieste() {
  // filtro x search
  const [filterValue, setFilterValue] = useState("");
  // filtro x status
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "age",
    direction: "ascending",
  });

  const [page, setPage] = useState(1);
  const pages = Math.ceil(pratiche.length / rowsPerPage);
  const hasSearchFilter = Boolean(filterValue);
  const dispatch = useDispatch();

  const handleFilterChange = useCallback((filter) => {
    setSelectedFilter(filter);
  }, []);

  const handleKeySelection = useCallback(
    (value) => {
      setSelectedKeys(value);
      console.log(value.currentKey);
      dispatch(edit(Array.from(selectedKeys)));
    },
    [dispatch, selectedKeys]
  );

  const handleCellAction = () => {
    console.log(selectedKeys);
  };

  // _________________HEADER_COLUMNS_________________

  const headerColumns = useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  // _________________FILTERED_ITEMS_________________

  const filteredItems = useMemo(() => {
    let filteredpratiche = [...pratiche];

    if (selectedFilter === "all" || selectedFilter === "") {
      filteredpratiche = filteredpratiche.filter((pratica) =>
        Object.values(pratica).some(
          (fieldValue) =>
            typeof fieldValue === "string" &&
            fieldValue.toLowerCase().includes(filterValue.toLowerCase())
        )
      );
    } else {
      filteredpratiche = filteredpratiche.filter((pratica) =>
        pratica[selectedFilter]
          .toLowerCase()
          .includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredpratiche = filteredpratiche.filter((pratiche) =>
        Array.from(statusFilter).includes(pratiche.status)
      );
    }

    return filteredpratiche;
  }, [filterValue, statusFilter, selectedFilter]);

  // _________________ITEMS_________________

  const items = useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = useMemo(() => {
    return [...items].sort((a, b) => {
      const first = a[sortDescriptor.column];
      const second = b[sortDescriptor.column];
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  // _________________RENDER_CELL_________________

  const renderCell = useCallback((pratica, columnKey) => {
    const cellValue = pratica[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <div className="flex">
            <Avatar
              isBordered
              color="default"
              size="sm"
              src={pratica.avatar2}
              classNames={{
                description: "text-default-500",
              }}
            >
              <p className="text-tiny">{pratica.email}</p>
            </Avatar>
            <Avatar
              isBordered
              color=""
              size="sm"
              src={pratica.avatar}
              classNames={{
                description: "text-default-500",
              }}
            >
              <p className="text-tiny">{pratica.email}</p>
            </Avatar>
          </div>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold capitalize text-sm">{cellValue}</p>
            <p>
              {pratica.urgenza === "urgente" ? (
                <span className="text-rose-700 text-[.6rem]">
                  {pratica.urgenza}
                </span>
              ) : (
                <span></span>
              )}
            </p>
          </div>
        );
      case "id":
        return (
          <div className="flex flex-col">
            <Tooltip
              placement="bottom"
              content={
                <div>
                  <p className="text-bold capitalize text-tiny">
                    aim_id: {pratica.age}
                  </p>
                  <p className="text-bold capitalize text-tiny">
                    id_remoto: 123
                  </p>
                </div>
              }
              color="primary"
            >
              <p className="text-bold text-small capitalize">{cellValue}</p>
            </Tooltip>
          </div>
        );
      case "email":
        return (
          <div className="flex flex-col">
            <Tooltip
              placement="bottom"
              content={
                <div>
                  <p className="text-bold text-tiny">nome_richiesta: xxyyzz</p>
                </div>
              }
              color="danger"
            >
              <p className="text-bold text-tiny capitalize">{cellValue}</p>
            </Tooltip>
          </div>
        );
      case "status":
        return (
          <Tooltip placement="right" content={pratica.status}>
            <Chip
              className="capitalize border-none gap-1 text-default-600"
              color={statusColorMap[pratica.status]}
              size="sm"
              variant="dot"
            ></Chip>
          </Tooltip>
        );
      case "actions":
        return (
          <TableActions top={false} vertical={false} itemList={selectedKeys} />
        );
      default:
        return cellValue;
    }
  }, []);

  // _________________ROWS_PER_PAGE_________________

  const onRowsPerPageChange = useCallback((e) => {
    setRowsPerPage(Number(e.target.value));
    setPage(1);
  }, []);

  // _________________ON_SEARCH_CHANGE_________________

  const onSearchChange = useCallback((value) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  // _________________TOP_CONTENT_________________

  const topContent = useMemo(() => {
    return (
      <TopContent
        filterValue={filterValue}
        statusFilter={statusFilter}
        visibleColumns={visibleColumns}
        statusOptions={statusOptions}
        columns={columns}
        onSearchChange={onSearchChange}
        onRowsPerPageChange={onRowsPerPageChange}
        setFilterValue={setFilterValue}
        setStatusFilter={setStatusFilter}
        setVisibleColumns={setVisibleColumns}
        handleFilterChange={handleFilterChange}
      />
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
    handleFilterChange,
  ]);

  // _________________BOTTOM_CONTENT_________________

  const bottomContent = useMemo(() => {
    return (
      <BottomContent
        hasSearchFilter={hasSearchFilter}
        page={page}
        pages={pages}
        selectedKeys={selectedKeys}
        items={items}
        setPage={setPage}
      />
    );
  }, [hasSearchFilter, page, pages, selectedKeys, items, setPage]);

  // _________________TABLE_BODY_________________

  return (
    <div className="flex items-center justify-center w-full m-1">
      <Table
        className="bg-white px-3 py-4 rounded-md"
        isCompact
        removeWrapper
        onCellAction={handleCellAction}
        aria-label="Example table with custom cells, pagination and sorting"
        bottomContent={bottomContent}
        bottomContentPlacement="outside"
        checkboxesProps={{
          classNames: {
            wrapper:
              "after:bg-foreground after:text-background text-background",
          },
        }}
        classNames={classNames}
        selectedKeys={selectedKeys}
        selectionMode="multiple"
        sortDescriptor={sortDescriptor}
        topContent={topContent}
        topContentPlacement="outside"
        onSelectionChange={handleKeySelection}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              allowsSorting={column.sortable}
              style={{ width: column.width }}
            >
              <div
                className={`h-full w-full flex items-center ${
                  column.uid === "actions" ? "justify-center" : "justify-start"
                }`}
              >
                {column.name}
              </div>
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No pratiche found"} items={sortedItems}>
          {(item) => (
            <TableRow key={item.id} className="border-b">
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
