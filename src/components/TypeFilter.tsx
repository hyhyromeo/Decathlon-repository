import "../App.css";
import { VtmnSelect } from "@vtmn/react";

type TypeFilterProps = {
  optionsTypeFilter: (e: { target: { value: string } }) => void;
};

export default function TypeFilter(props: TypeFilterProps) {
  return (
    <div className="optionWrap">
      <VtmnSelect
        id="vtmn-select"
        labelText="Type"
        onChange={props.optionsTypeFilter}
        options={[
          <option disabled selected value="">
            Select
          </option>,
          <option value="all">All</option>,
          <option value="visibility">Public</option>,
          <option value="private">Private</option>,
          <option value="fork">Forks</option>,
          <option value="sources">sources</option>,
          <option value="member">Member</option>,
          <option value="internal">internal</option>,
        ]}
      />
    </div>
  );
}
