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
  const [persons, setPersons] = useState([
    { name: 'Max', age: 28 },
    { name: 'Manu', age: 29 },
    { name: 'Stephenie', age: 26 }
  ]);

  const [showPersons, setShowPersons] = useState(false);

  const switchNameHandler = newName => {
    setPersons([
      { name: newName, age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephenie', age: 76 }
    ]);
  };

  const togglePersonHandler = () => {
    const doesShow = showPersons;
    return setShowPersons(!doesShow);
  };

  const renderPersons = () => {
    if (!showPersons) {
      return null;
    }

    return (
      <div>
        <Person
          onParagraphClick={switchNameHandler}
          name={persons[0].name}
          age={persons[0].age}
        />
        <Person
          onParagraphClick={switchNameHandler}
          name={persons[1].name}
          age={persons[1].age}
        >
          My hobbies: racing
        </Person>
        <Person
          onParagraphClick={switchNameHandler}
          name={persons[2].name}
          age={persons[2].age}
        />
      </div>
    );
  };

  const renderButton = () => {
    return (
      <button style={style} onClick={togglePersonHandler}>
        {showPersons ? 'Hide persons' : 'Show persons'}
      </button>
    );
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
      {renderButton()}
      {renderPersons()}
    </div>
  );
};

export default App;
