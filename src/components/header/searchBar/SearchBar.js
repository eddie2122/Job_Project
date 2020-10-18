import React from "react";
import "./SearchBar.css";

function SearchBar(props) {
  return (
    <div>
      <div >
        <input  type="text" name="SearchBar" placeholder="Search"></input>
      </div>
      <div className="Main">
        <div className="SearchIconCircle"></div>
        <div className="SearchIconLine"></div>
      </div>
    </div>
  );
}

export default SearchBar;
