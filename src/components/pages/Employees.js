import React from "react";
import list from "../../employees.json";
// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function sortByProperty (property) {
  return function (a,b) {
    if (a[property] > b[property])
      return 1;
    else if (a[property] < b[property])
      return -1;
  return 0;
  }
}
function sortList () {
  // list.sort(sortByProperty(sortProp));
  return list;
}

function Employees(props) {
  return (
    <>
    <button onClick={sortList('id')} className="button" id="id">Sort by ID</button>
    <button onClick={sortList('last_name')} className="button" id="lastName">Sort by Last Name</button>
    <button onClick={sortList('department')} className="button" id="department">Sort by Department</button>
    <ul className="list-group">
      {list.map(item => (
        <li className="list-group-item" key={item.id}>
        Name: {item.first_name} {item.last_name}, Department: {item.department}, Employee Role: {item.role}
      </li>
      ))}
    </ul>
    </>
  );
}

export default Employees;
