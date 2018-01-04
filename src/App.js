import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

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

    const style = {
      backgroundColor: 'green',
      font: 'inherit',
      border: '1x sl blue',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    if (this.state.show) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={this.deletePerson.bind(this, index)}
              name={person.name}
              key={person.id}
              changed={event => this.nameChanged(event, person.id)} />
          })}
        </div>
      );

      style.backgroundColor = 'red'
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }

    const classes = [];

    if (this.state.persons.length <= 2) {
      classes.push('red');
    }

    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }

    return (
      <StyleRoot>
        <div className="App">
          <p className={classes.join(' ')}>yolo man</p>
          <button
            style={style}
            onClick={this.togglePerson}>aparecer bagulhos</button>
          {persons}
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
