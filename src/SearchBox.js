import React, { useState } from "react";
import { SearchButton } from "./SearchButton";

const SearchBox = ({ requestSearch }) => {
  const [query, setQuery] = useState("");

  const searchClick = () => {
    if (query) {
      requestSearch(query);
    }
  };
  const updateQuery = (e) => {
    setQuery(e.target.value);
  };
  return (
    <>
      <input
        type="text"
        name="search"
        placeholder="Search"
        value={query}
        onChange={updateQuery}
      />
      <SearchButton onClick={searchClick} />
    </>
  );
};
export default SearchBox;
