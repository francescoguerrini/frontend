// BottomContent.jsx
import PropTypes from "prop-types";
import { Pagination } from "@nextui-org/react";

const BottomContent = ({
  hasSearchFilter,
  page,
  pages,
  selectedKeys,
  items,
  setPage,
}) => {
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
};

BottomContent.propTypes = {
  hasSearchFilter: PropTypes.bool,
  page: PropTypes.number,
  pages: PropTypes.number,
  selectedKeys: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.instanceOf(Set),
  ]),
  items: PropTypes.array,
  setPage: PropTypes.func,
};

export default BottomContent;
