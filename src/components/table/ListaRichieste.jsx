import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Tooltip,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Chip,
  User,
  Pagination,
} from "@nextui-org/react";
import { FiSearch, FiChevronDown, FiEye } from "react-icons/fi";
import RiassegnazioneModal from "../RiassegnazioneModal";
import TableActions from "./TableActions";
import {
  columns,
  users,
  statusOptions,
  statusColorMap,
  INITIAL_VISIBLE_COLUMNS,
} from "./data";
import { capitalize } from "./utils";
import FilterSelector from "./FilterSelector";

export default function ListaOperazioni() {
  const [filterValue, setFilterValue] = useState("");
  const [selectedKeys, setSelectedKeys] = useState(new Set([]));
  const [visibleColumns, setVisibleColumns] = useState(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedFilter, setSelectedFilter] = useState("");
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortDescriptor, setSortDescriptor] = useState({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = useState(1);

  const pages = Math.ceil(users.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);

  const handleFilterChange = useCallback((filter) => {
    setSelectedFilter(filter);
  }, []);

  const handleCellAction = (event) => {
    event.preventDefault();
    event.stopPropagation();
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
    let filteredUsers = [...users];

    if (hasSearchFilter) {
      filteredUsers = filteredUsers.filter((user) =>
        user[selectedFilter].toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (
      statusFilter !== "all" &&
      Array.from(statusFilter).length !== statusOptions.length
    ) {
      filteredUsers = filteredUsers.filter((user) =>
        Array.from(statusFilter).includes(user.status)
      );
    }

    return filteredUsers;
  }, [filterValue, statusFilter, hasSearchFilter]);

  // const filteredItems = useMemo(() => {
  //   let filteredUsers = [...users];

  //   const isAnyFilterActive =
  //     hasSearchFilter ||
  //     (statusFilter !== "all" &&
  //       Array.from(statusFilter).length !== statusOptions.length);

  //   if (isAnyFilterActive) {
  //     if (hasSearchFilter) {
  //       filteredUsers = filteredUsers.filter((user) =>
  //         user[selectedFilter].toLowerCase().includes(filterValue.toLowerCase())
  //       );
  //     }

  //     if (
  //       statusFilter !== "all" &&
  //       Array.from(statusFilter).length !== statusOptions.length
  //     ) {
  //       filteredUsers = filteredUsers.filter((user) =>
  //         Array.from(statusFilter).includes(user.status)
  //       );
  //     }
  //   } else {
  //     // Nessun filtro attivo, quindi la ricerca è valida per tutti i campi
  //     if (selectedFilter === "") {
  //       filteredUsers = filteredUsers.filter((user) =>
  //         Object.values(user).some(
  //           (value) =>
  //             typeof value === "string" &&
  //             value.toLowerCase().includes(filterValue.toLowerCase())
  //         )
  //       );
  //     } else {
  //       // Cicla solo sul campo selezionato se il filtro non è vuoto
  //       filteredUsers = filteredUsers.filter((user) =>
  //         user[selectedFilter].toLowerCase().includes(filterValue.toLowerCase())
  //       );
  //     }
  //   }

  //   return filteredUsers; // Ritorna l'array degli utenti filtrati
  // }, [filterValue, statusFilter, hasSearchFilter, selectedFilter]);
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

  const renderCell = useCallback((user, columnKey) => {
    const cellValue = user[columnKey];

    switch (columnKey) {
      case "name":
        return (
          <User
            avatarProps={{ radius: "full", size: "sm", src: user.avatar }}
            classNames={{
              description: "text-default-500",
            }}
            name={cellValue}
          >
            {user.email}
          </User>
        );
      case "role":
        return (
          <div className="flex flex-col">
            <p className="text-bold text-small capitalize">{cellValue}</p>
            <p className="text-bold text-tiny capitalize text-default-500">
              {user.age}
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
                  <p className="text-bold text-small capitalize">
                    aim_id: {user.age}
                  </p>
                  <p className="text-bold text-small capitalize">
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
                  <p className="text-bold text-small">nome_richiesta: xxyyzz</p>
                </div>
              }
              color="danger"
            >
              <p className="text-bold text-small capitalize">{cellValue}</p>
            </Tooltip>
          </div>
        );
      case "status":
        return (
          <Chip
            className="capitalize border-none gap-1 text-default-600"
            color={statusColorMap[user.status]}
            size="sm"
            variant="dot"
          ></Chip>
        );
      case "actions":
        return (
          <div className="relative flex items-center gap-2">
            <Tooltip content="Dettagli">
              <Link to="/gestione-report">
                <FiEye />
              </Link>
            </Tooltip>
            <Tooltip color="danger" content="Riassegna">
              <span className="text-lg text-default-400 cursor-pointer active:opacity-5">
                <RiassegnazioneModal title="Riassegnazione Richiesta" />
              </span>
            </Tooltip>
          </div>
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
      <div className="flex flex-col gap-3">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
              inputWrapper: "border-1 h-2",
            }}
            placeholder="...cerca"
            size="sm"
            startContent={<FiSearch className="text-default-300" />}
            value={filterValue}
            variant="bordered"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div>
            <TableActions />
          </div>
          <div className="flex gap-2 mr-2">
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  endContent={<FiChevronDown className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Stato
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={statusFilter}
                selectionMode="multiple"
                onSelectionChange={setStatusFilter}
              >
                {statusOptions.map((status) => (
                  <DropdownItem key={status.uid} className="capitalize">
                    {capitalize(status.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex">
                <Button
                  className="bg-foreground text-background"
                  endContent={<FiChevronDown className="text-small" />}
                  size="sm"
                  variant="flat"
                >
                  Campi
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns.map((column) => (
                  <DropdownItem key={column.uid} className="capitalize">
                    {capitalize(column.name)}
                  </DropdownItem>
                ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            <FilterSelector onFilterChange={handleFilterChange} />
          </span>
          <label className="flex items-center text-default-400 text-small">
            Righe per pagina:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    statusFilter,
    visibleColumns,
    onSearchChange,
    onRowsPerPageChange,
  ]);

  // _________________BOTTOM_CONTENT_________________

  const bottomContent = useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: "bg-foreground text-background",
          }}
          color="default"
          isDisabled={hasSearchFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
        <span className="text-small text-default-400">
          {selectedKeys === "all"
            ? "All items selected"
            : `${selectedKeys.size} of ${items.length} selected`}
        </span>
      </div>
    );
  }, [selectedKeys, items.length, page, pages, hasSearchFilter]);

  const classNames = useMemo(
    () => ({
      wrapper: ["max-h-[382px]", "max-w-3xl"],
      th: ["bg-transparent", "text-default-500", "border-b", "border-divider"],
      td: [
        // changing the rows border radius
        // first
        "group-data-[first=true]:first:before:rounded-none",
        "group-data-[first=true]:last:before:rounded-none",
        // middle
        "group-data-[middle=true]:before:rounded-none",
        // last
        "group-data-[last=true]:first:before:rounded-none",
        "group-data-[last=true]:last:before:rounded-none",
      ],
    }),
    []
  );

  // _________________TABLE_BODY_________________

  return (
    <div className="flex items-center justify-center w-full sm:mx-[4%]">
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
        onSelectionChange={setSelectedKeys}
        onSortChange={setSortDescriptor}
      >
        <TableHeader columns={headerColumns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === "actions" ? "center" : "start"}
              allowsSorting={column.sortable}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody emptyContent={"No users found"} items={sortedItems}>
          {(item) => (
            <TableRow key={item.id} className="border-b ">
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
