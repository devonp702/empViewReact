import React, { Component } from "react";
import NavTabs from "./NavTabs";
import Employees from "./pages/Employees";
import Managers from "./pages/Managers";

class Portfolio extends Component {
  state = {
    currentPage: "Employees"
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  renderPage = () => {
    if (this.state.currentPage === "Employees") {
      return <Employees />;
    } else {
      return <Managers />;
    }
  };

  render() {
    return (
      <div>
        <NavTabs
          currentPage={this.state.currentPage}
          handlePageChange={this.handlePageChange}
        />
        {this.renderPage()}
      </div>
    );
  }
}

export default Portfolio;
