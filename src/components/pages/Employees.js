import React from "react";
import list from "../../employees.json";
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately

function Employees(props) {
  return (
    <ul className="list-group">
      {list.map(item => (
        <li className="list-group-item" key={item.id}>
        Name: {item.first_name} {item.last_name}, Department: {item.department}, Employee Role: {item.role}
      </li>
      ))}
    </ul>
  );
}

export default Employees;
