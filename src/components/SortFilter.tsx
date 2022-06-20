import "../App.css";
import { VtmnSelect } from "@vtmn/react";

type SortFilterProps = {
  optionsSortFilter: (e: { target: { value: string } }) => void;
};

export default function SortFilter(props: SortFilterProps) {
  return (
    <div className="optionWrap">
      <VtmnSelect
        id="vtmn-select"
        labelText="Sort"
        onChange={props.optionsSortFilter}
        className="vtmn-select"
        options={[
          <option disabled selected value="">
            Select
          </option>,
          <option value="created">Created</option>,
          <option value="updated">Updated</option>,
          <option value="full_name">Full Name</option>,
          <option value="pushed">Pushed</option>,
        ]}
      />
    </div>
  );
}
