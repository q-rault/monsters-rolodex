import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component";

import "./App.css";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      searchField: "",
      monsters: [
        {
          name: "Frankenstein",
          id: "1",
        },
        {
          name: "Dracula",
          id: "2",
        },
        {
          name: "Machiavel",
          id: "3",
        },
      ],
    };
  }
  handleChange = (e) => {
    this.setState(
      { searchField: e.target.value }
      // ()=> console.log(this.state) // CALLBACK FUNCTION TO RUN WHEN SETSTATE FINISHES
    );
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
