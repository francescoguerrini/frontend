import PropTypes from "prop-types";
import {
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { FiSearch, FiChevronDown } from "react-icons/fi";
import TableActions from "./TableActions";
import { capitalize } from "../consts/utils";
import FilterSelector from "./FilterSelector";

function TopContent({
  filterValue,
  statusOptions,
  statusFilter,
  visibleColumns,
  columns,
  setFilterValue,
  setStatusFilter,
  setVisibleColumns,
  handleFilterChange,
  onSearchChange,
  onRowsPerPageChange,
}) {
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
          <TableActions top={true} />
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
            <option value="20">20</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </label>
      </div>
    </div>
  );
}

TopContent.propTypes = {
  filterValue: PropTypes.string,
  statusFilter: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Set),
  ]),
  visibleColumns: PropTypes.instanceOf(Set),
  onSearchChange: PropTypes.func,
  onRowsPerPageChange: PropTypes.func,
  statusOptions: PropTypes.array,
  columns: PropTypes.array,
  setFilterValue: PropTypes.func,
  setStatusFilter: PropTypes.func,
  setVisibleColumns: PropTypes.func,
  handleFilterChange: PropTypes.func,
};

export default TopContent;
