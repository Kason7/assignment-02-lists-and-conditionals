import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

// Import components
import Counter from './components/Counter';

const App = () => {
  // State Declaration
  const [textState, setTextState] = useState({
    text: 'Max',
  });

  // State text change handler
  const textChangedHandler = (event, text) => {
    const newText = (textState.text = event.target.value);

    // setTextState({ ...textState, text: text });
    console.log(newText);
    setTextState({ ...textState, text: newText });
  };

  // Component Body
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <h1>Write a long name:</h1>
        <Counter
          text={textState.text}
          changed={(event) => textChangedHandler(event, textState.text)}
        />
      </header>
    </div>
  );
};

export default App;
