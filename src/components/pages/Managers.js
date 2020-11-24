import React from "react";
import employees from "../../employees.json";
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Managers(props) {
  // Using the filter method, we can create a new array containing only managers
  const isManager = employees.filter(employees => employees.manager);

  return (
    <>
    <button class="button" id="id">Sort by ID</button>
    <button class="button" id="lastName">Sort by Last Name</button>
    <button class="button" id="department">Sort by Department</button>
    <ul className="list-group">
      {isManager.map(item => (
        <li className="list-group-item" key={item.id}>
          Name: {item.first_name} {item.last_name}, Department: {item.department}, Employee Role: {item.role}
        </li>
      ))}
    </ul>
    </>
  );
}

export default Managers;
