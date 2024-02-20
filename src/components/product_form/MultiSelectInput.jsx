import { Select, SelectItem } from "@nextui-org/react";
import PropTypes from "prop-types";

export default function MultiSelectInput({
  selection_mode = "single",
  item_list,
  label = "",
}) {
  return (
    <div className="h-full flex flex-col items-start">
      <div className="label">{label}</div>
      <Select
        items={item_list}
        placeholder=""
        className="max-w-xs bg-white rounded-md"
        size="xs"
        variant="underlined"
        selectionMode={selection_mode}
      >
        {(item) => (
          <SelectItem key={item.value} className="max-w-xs bg-white">
            {item.label}
          </SelectItem>
        )}
      </Select>
    </div>
  );
}

MultiSelectInput.propTypes = {
  selection_mode: PropTypes.oneOf(["single", "multiple"]),
  label: PropTypes.string,
  item_list: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
    })
  ),
};
