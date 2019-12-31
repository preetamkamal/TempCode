import React, { Component } from "react";
import Person from "./Person/Person";
class App extends Component {
  state = {
    persons: [
      { id: "12sdga", name: "Majid", age: 22 },
      { id: "324dsf", name: "Soham", age: 20 },
      { id: "345sfg", name: "Razim", age: 12 }
    ],
    showPeopleState: false
  };

  nameChangeHandler = (e, id) => {
    var personIndex = this.state.persons.findIndex(p => p.id === id);
    var newName = e.target.value;
    var personCopy = [...this.state.persons];
    personCopy[personIndex].name = newName;

    this.setState({
      persons: personCopy
    });
  };

  showButtonHandler = () => {
    var tempStatus = !this.state.showPeopleState;
    this.setState({
      showPeopleState: tempStatus
    });
  };
  addPersonHandler = () => {
    var newPerson = {
      id: Math.random(),
      name: "newPerson",
      age: "29"
    };
    var personCopy = [...this.state.persons, newPerson];

    this.setState({
      persons: personCopy
    });
  };
  deletePersonHandler(idx) {
    var personCopy = [...this.state.persons];
    personCopy.splice(idx, 1);
    this.setState({
      persons: personCopy
    });
  }
  render() {
    var people = null;
    var buttonText = "Show People";
    if (this.state.showPeopleState === true) {
      buttonText = "Hide People";
      people = (
        <div>
          {this.state.persons.map(p => {
            return (
              <Person
                name={p.name}
                age={p.age}
                key={p.id}
                nameChange={event => this.nameChangeHandler(event, p.id)}
                deleteMe={() => this.deletePersonHandler(p.id)}
              />
            );
          })}
        </div>
      );
    }
    return (
      <div>
        <h1>Hello</h1>

        <button onClick={this.addPersonHandler}>Add a new Person</button>
        <br />
        <button onClick={this.showButtonHandler}>{buttonText}</button>
        {people}
      </div>
    );
  }
}

export default App;
