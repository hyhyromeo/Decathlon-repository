import "../App.css";
import { VtmnSelect } from "@vtmn/react";

type LanguageFilterProps = {
  optionsLanguageFilter: (e: { target: { value: string } }) => void;
};

export default function LanguageFilter(props: LanguageFilterProps) {
  return (
    <div className="optionWrap">
      <VtmnSelect
        id="vtmn-select"
        labelText="Language"
        onChange={props.optionsLanguageFilter}
        options={[
          <option disabled selected value="">
            Select
          </option>,
          <option value="Java">Java</option>,
          <option value="Python">Python</option>,
          <option value="Kotlin">Kotlin</option>,
          <option value="CSS">CSS</option>,
          <option value="TypeScript">TypeScript</option>,
          <option value="JavaScript">JavaScript</option>,
          <option value="Shell">Shell</option>,
          <option value="Ruby">Ruby</option>,
          <option value="HTML">HTML</option>,
          <option value="Swift">Swift</option>,
        ]}
      />
    </div>
  );
}
