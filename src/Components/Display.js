import React from 'react'
import './Display.sass'

const Display = ({ power, calculationArr }) => {

  const calculatedValue = eval(calculationArr.slice(0, calculationArr.length-1).join(''))
  console.log(calculationArr.join(''))

  return (
    <div id="display" className="display">
      <div className="display--text">
        {(
        (!power)
          ? 'Power is off'
          : !calculationArr
          ? 'Nothing clicked yet' 
          : calculatedValue
        )}
      </div>
    </div>
  )
}


export default Display
