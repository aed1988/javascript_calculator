import React, {useState} from 'react';
import './App.sass';
import CalculatorContainer from './Components/CalculatorContainer'
import Switch from './Components/Switch'

function App() {

  const [power, setPower] = useState(true)

  const handleTogglePower = (currentPower) => setPower(!currentPower)

  return (
    <>
      <Switch power={power} handleTogglePower={handleTogglePower}/>
      <CalculatorContainer power={power}/>
    </>
  );
}

export default App;
