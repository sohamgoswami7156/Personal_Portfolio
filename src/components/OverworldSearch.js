import React from "react";
import "./overworld.css";

function OverworldSearch() {
  return (
    <div className="ow-search">
      <label className="ow-search__label" htmlFor="ow-search-input">
        Quest Log
      </label>
      <div className="ow-search__field">
        <svg className="ow-search__icon" viewBox="0 0 256 256" aria-hidden="true">
          <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z" />
        </svg>
        <input
          id="ow-search-input"
          className="ow-search__input"
          type="text"
          placeholder="Search projects, roles, skills..."
        />
        <kbd className="ow-search__kbd">/</kbd>
      </div>
      <p className="ow-search__help">
        Press <span>/</span> to focus. Find projects, research, and tools.
      </p>
    </div>
  );
}

export default OverworldSearch;
