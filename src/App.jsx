import React from 'react';
import './App.css';
import PersonCard from './Components/PersonCard';
import { useState } from 'react';

// css for dark mode as a variable 
const darkMode = {
  backgroundColor: "#151414",
  color: "ghostwhite",
  padding: "20px"
}

// css for light mode as a varialbe 
const lightMode = {
  backgroundColor: "white",
  color: "black",
  padding: "20px"
}

function App() {
  /*  using state to determine if the light mode is true or false */
  const [light, setLight] = useState(true);
  const switchLight = () => setLight(!light);

  return (
    /* make sure to put ternary operator into div so whole div will change, if(state of light is true use lightMode else use darkMode ln 14, ln 7)*/
    <div className="App" style={light ? lightMode : darkMode}>
      
      {/* button to display "Dark Mode", "Light Mode" */}
      <button onClick={switchLight}>{light ? "Dark Mode" : "Light Mode"}</button>

      <PersonCard
      firstName="Tim"
      age={36}
      hairColor="Brown" 
       />
      <PersonCard
      firstName="Nia"
      age={33}
      hairColor="Brown" 
       />
      <PersonCard
      firstName="Rocky"
      age={10}
      hairColor="White and Black" 
       />
      <PersonCard
      firstName="Kona"
      age={7}
      hairColor="Golden Ale" 
       />
    </div>
  );
}

export default App;
 