import React, {useState} from 'react';
import './App.css';
import Calculator from './Components/Calculator'
import Switch from './Components/Switch'

function App() {

  const [power, setPower] = useState(true)

  const handleTogglePower = (currentPower) => setPower(!currentPower)

  return (
    <>
      <Switch power={power} handleTogglePower={handleTogglePower}/>
      <Calculator power={power}/>
    </>
  );
}

export default App;
