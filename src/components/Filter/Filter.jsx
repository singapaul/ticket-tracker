import React from "react";
import "./Filter.scss";

const Filter = () => {
  return (
    <div className="filter">
      <h2 className="filter__heading">Filter</h2>
      <h4 className="filter__subHeading">By job</h4>
      <div>
        <label htmlFor="all">Select All</label>
        <input id="all" type="checkbox" />{" "}
      </div>
      <div>
        <label htmlFor="junior">Junior Software Engineer</label>
        <input id="junior" type="checkbox" />{" "}
      </div>
      <div>
        <label htmlFor="software">Software Engineer</label>
        <input id="software" type="checkbox" />
      </div>
      <div>
        <label htmlFor="senior">Senior Software Engineer</label>
        <input id="senior" type="checkbox" />
      </div>
      <div>
        <label htmlFor="project">Project Manager</label>
        <input id="project" type="checkbox" />
      </div>
      <div>
        <label htmlFor="Tester">Tester</label>
        <input id="Tester" type="checkbox" />
      </div>
      <div>
        <label htmlFor="hardman">Hard man</label>
        <input id="hardman" type="checkbox" />
      </div>

      <h4 className="filter__subHeading">By employee</h4>
    </div>
  );
};

export default Filter;
