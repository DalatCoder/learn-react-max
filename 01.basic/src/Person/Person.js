import './Person.css';
import React from 'react';

const Person = props => {
  return (
    <div className="Person">
      <p onClick={() => props.onParagraphClick('Hieu')}>
        Hello! My name is {props.name} and I am {props.age} years old!
      </p>
      <p>{props.children}</p>
    </div>
  );
};

export default Person;
