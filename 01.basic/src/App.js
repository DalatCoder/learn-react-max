import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hello world</h1>
      <Person name="Max" age="28" />
      <Person name="Manu" age="29">
        My hobbies: racing
      </Person>
      <Person name="Stephenie" age="25" />
    </div>
  );
}

export default App;
