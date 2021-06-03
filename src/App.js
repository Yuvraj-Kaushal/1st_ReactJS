import React, { useState } from 'react';

import HobbyList from './components/HobbyList/HobbyList';
import NewHobby from './components/NewHobby/NewHobby';
import './App.css';

const App = () => {
  const [MyHobbies, setMyHobbies] = useState([
    { id: 'mh1', text: 'Reading Books' },
    { id: 'mh2', text: 'Learning New Things ( Different Programming Languages, New Techs )'},
    { id: 'mh3', text: 'Playing Games' },
    { id: 'mh4', text: 'Playing Guitar' },
    { id: 'mh5', text: 'Singing Songs' },
    { id: 'mh6', text: 'Listening Songs' },
    { id: 'mh7', text: 'Editing Videos & Photos' }
  ]);

  const addNewHobbyHandler = newHobby => {
    setMyHobbies(prevMyHobbies => prevMyHobbies.concat(newHobby));
  };

  return (
    <div className="my-hobbies">
      <h2>Yuvraj's Hobbies</h2>
      <NewHobby onAddHobby={addNewHobbyHandler} />
      <HobbyList hobbies={MyHobbies} />
    </div>
  );
};

export default App;
