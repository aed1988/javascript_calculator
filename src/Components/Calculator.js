import React, {useState} from 'react'
import Display from './Display'

const Calculator = ({power}) => {

  const [calculation, setCalculation] = useState([55,'-',4,'*',8,'='])
  return (
    <>
      <Display calculationArr={calculation} power={power}/>
    </>
  )
}

export default Calculator
