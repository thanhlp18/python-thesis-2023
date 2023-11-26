import React, { useState } from "react";
import clsx from "clsx";
function SearchBar({ handleSearch, className }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    handleSearch(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
    setSearchTerm("");
  };

  return (
    <form onSubmit={handleSubmit} className={clsx(className)}>
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search by ID or Class"
          value={searchTerm}
          onInput={handleChange}
        />
        <button className="btn btn-outline-secondary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchBar;
