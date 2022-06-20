import "../App.css";
import { VtmnTextInput } from "@vtmn/react";
import search from "../assets/search.png";

type SearchInputProps = {
  searchText: string;
  searchBar: (e: { target: { value: string } }) => void;
};

export default function SearchInput(props: SearchInputProps) {
  return (
    <div className="filterWrap">
      <VtmnTextInput
        width="100%"
        icon="search-fill"
        identifier="vtmn-input"
        labelText="Label"
        onChange={props.searchBar}
        value={props.searchText}
        placeholder="Find a Repository..."
      />
      {props.searchText === "" ? (
        <img src={search} className="searchIcon"></img>
      ) : (
        ""
      )}
    </div>
  );
}
