import React from 'react'

const Switch = ({power, handleTogglePower}) => {

  const handleClick = () => {
    handleTogglePower(power)
  }

  return (
    <button className={(power ? 'toggleButton toggleButton--on' : 'toggleButton toggleButton--off')} onClick={handleClick}>
      Power is {power ? 'ON' : 'OFF'}
    </button>
  )
}

export default Switch
