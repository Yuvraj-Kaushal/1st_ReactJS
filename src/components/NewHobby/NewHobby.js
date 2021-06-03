import React, { useState } from 'react';

import './NewHobby.css';

const NewHobby = props => {
  const [enteredText, setEnteredText] = useState('');

  const addHobbyHandler = event => {
    event.preventDefault();

    const newHobby = {
      id: Math.random().toString(),
      text: enteredText
    };
    
   setEnteredText('');

    props.onAddHobby(newHobby);
  };

  const textChangeHandler = event => {
    setEnteredText(event.target.value);
  };


  return (
    <form className="new-hobby" onSubmit={addHobbyHandler}>
      <input type="text" value={enteredText} onChange={textChangeHandler} />
      <button type="submit">Add Hobby</button>
    </form>
  );
};

export default NewHobby;
