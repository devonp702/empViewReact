import React from "react";
import List from "./components/List";
import employees from "./employees.json"

/*
resources:
activity 16
rendering the list, and linking to a json file

activity 21
render different views on different pages, and add navigation

to-do
~~ make json list and load to page ~~
set up views for managers and all employees
add sort functionality by name, by department, by role
styling?
deploy


*/
function App() {
  return <List employees={employees} />;
}

export default App;
