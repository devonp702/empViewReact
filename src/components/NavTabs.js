import React from "react";

function NavTabs(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a
          href="#employees"
          onClick={() => props.handlePageChange("Employees")}
          className={props.currentPage === "Employees" ? "nav-link active" : "nav-link"}
        >
          All Employees
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#managers"
          onClick={() => props.handlePageChange("Managers")}
          className={props.currentPage === "Managers" ? "nav-link active" : "nav-link"}
        >
          Managers
        </a>
      </li>
    </ul>
  );
}

export default NavTabs;
