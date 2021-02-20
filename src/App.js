import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list";
import { SearchBox } from "./components/search";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      robots: [],
      searchField: ""
    };
  }
  onSearchChanged = (event) => {
    this.setState({ searchField: event.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => this.setState({ robots: data }));
  }
  render() {
    const { robots, searchField } = this.state;

    const FilterRobots = robots.filter((el) =>
      el.name.toLowerCase().includes(searchField)
    );

    return (
      <div className="App">
        <h1>Хэрэглэгчдийн жагсаалт</h1>
        <SearchBox onSearch={this.onSearchChanged} />
        <CardList robots={FilterRobots} />
      </div>
    );
  }
}
