import React from "react";
import "./Filter.scss";

const Filter = ({
  searchValue,
  handleSearch,
  jobValue,
  handlejobSearch,
  selectedDropdown,
  handleSort,
}) => {
  return (
    <div className="filter">
      <h2 className="filter__heading">Filter</h2>
      <h4 className="filter__subHeading">By job</h4>
      <input
        type="text"
        label={"input"}
        value={jobValue}
        onChange={handlejobSearch}
      />
      <h4 className="filter__subHeading">By employee</h4>
      <input
        type="text"
        label={"input"}
        value={searchValue}
        onChange={handleSearch}
      />
      <h4 className="filter__subHeading">Sort dropdown</h4>
      <select onChange={handleSort} value={selectedDropdown}>
        <option value={"default"}>Default</option>
        <option value={"hilow"}>Highest-Lowest</option>
        <option value={"lowhi"}>Lowest-Highest</option>
      </select>
    </div>
  );
};

export default Filter;
