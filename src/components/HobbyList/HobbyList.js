import React from 'react';

import './HobbyList.css';

const HobbyList = props => {
  return (
    <ul className="hobby-list">
      {props.hobbies.map(hobby => {
        return <li key={hobby.id}>{hobby.text}</li>;
      })}
    </ul>
  );
};

export default HobbyList;
