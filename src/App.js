import React from "react";
import List from "./components/List";

const employees = [
  {
    id: 1,
    first_name: "Joan",
    last_name: "Smith",
    department: "sales",
    role: "manager",
    manager: true
  },
  {
    id: 2,
    first_name: "Steven",
    last_name: "Magnet",
    department: "production",
    role: "manager",
    manager: true
  },
  {
    id: 3,
    first_name: "Cheese",
    last_name: "McGee",
    department: "sales",
    role: "public relations",
    manager: false
  },
  {
    id: 4,
    first_name: "Billy",
    last_name: "Green",
    department: "production",
    role: "inventory",
    manager: false
  },
  {
    id: 5,
    first_name: "Tyler",
    last_name: "Wiltonsnyder",
    department: "sales",
    role: "online presence",
    manager: false
  },
  {
    id: 6,
    first_name: "Juice",
    last_name: "Simpson",
    department: "central office",
    role: "manager",
    manager: true
  }
];
/*
resources:
activity 16
rendering the list, and linking to a json file

activity 21
render different views on different pages, and add navigation

to-do
make json list and load to page
set up views for managers and all employees
add sort functionality by name, by department, by role
styling?
deploy


*/
function App() {
  return <List employees={employees} />;
}

export default App;
