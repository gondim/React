import React, { Component } from 'react';
import classes from './App.css';
import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/cockpit/Cockpit';

class App extends Component {

  state = {
    persons: [
      { id: '1', name: 'teste25' },
      { id: '2', name: 'teste2' },
      { id: '3', name: 'teste23' }
    ],
    show: false
  }

  nameChanged = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[personIndex] = person;

    this.setState({ persons: persons });

  }

  deletePerson = (index) => {
    const persons = [...this.state.persons];
    persons.splice(index, 1);
    this.setState({ persons: persons })
  };

  togglePerson = () => {
    const doesShow = this.state.show
    this.setState({ show: !doesShow })
  };

  render() {

    let persons = null;
    if (this.state.show) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePerson}
          changed={this.nameChanged}
        />
      );
      console.log(classes.Red);

    }

    return (
      <StyleRoot>
        <div className={classes.App}>
          <Cockpit
            showPersons={this.state.show}
            persons={this.state.persons}
            clicked={this.togglePerson} />
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
