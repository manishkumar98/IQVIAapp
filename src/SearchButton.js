import React from "react";
import "./SearchButton.css";

function SearchButton({ clickedButton }) {
  const handleClick = () => {
    clickedButton(true);
  };
  return (
    <>
      <div data-testid="button" className="button-style" onClick={handleClick}>
        {"SEARCH"}
      </div>
    </>
  );
}

export default SearchButton;
