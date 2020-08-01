import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

/*
  class App extends React.Component {
    state = {
      persons: [
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephenie', age: 26 }
      ]
    };

    switchNameHandler = () => {
      this.setState({
        persons: [
          { name: 'Maximilian', age: 28 },
          { name: 'Manu', age: 29 },
          { name: 'Stephenie', age: 76 }
        ]
      });
    };

    render() {
      return (
        <div className="App">
        <h1>Hello world</h1>
        <button onClick={() => this.switchNameHandler()}>Switch Name</button>
        <Person
        name={this.state.persons[0].name}
        age={this.state.persons[0].age}
        />
        <Person
        name={this.state.persons[1].name}
        age={this.state.persons[1].age}
        >
        My hobbies: racing
        </Person>
        <Person
        name={this.state.persons[2].name}
        age={this.state.persons[2].age}
        />
        </div>
      );
    }
  }
  */

const App = () => {
  const [state, setState] = useState({
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephenie', age: 26 }
    ]
  });

  const switchNameHandler = newName => {
    setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephenie', age: 76 }
      ]
    });
  };

  const style = {
    backgroundColor: '#fff',
    font: 'inherit',
    border: '1px solid #333',
    padding: '8px',
    borderRadius: '3px',
    cursor: 'pointer'
  };

  return (
    <div className="App">
      <h1>Hello world</h1>
      <button
        style={style}
        onClick={switchNameHandler.bind(null, 'Maximilian')}
      >
        Switch Name
      </button>
      <Person
        onParagraphClick={switchNameHandler}
        name={state.persons[0].name}
        age={state.persons[0].age}
      />
      <Person
        onParagraphClick={switchNameHandler}
        name={state.persons[1].name}
        age={state.persons[1].age}
      >
        My hobbies: racing
      </Person>
      <Person
        onParagraphClick={switchNameHandler}
        name={state.persons[2].name}
        age={state.persons[2].age}
      />
    </div>
  );
};

export default App;
