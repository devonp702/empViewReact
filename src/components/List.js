import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function List(props) {
  // Using the filter method, we can create a new array containing only managers
  const isManager = props.employees.filter(employees => employees.manager);

  return (
    <ul className="list-group">
      {isManager.map(item => (
        <li className="list-group-item" key={item.id}>
          Name: {item.first_name} {item.last_name}, Department: {item.depatrment}, Employee Role: {item.role}
        </li>
      ))}
    </ul>
  );
}

export default List;
