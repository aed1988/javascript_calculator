import React from 'react'

const Button = ({value, handleClick, className}) => {

  const handleButtonClick = (e) => {
    handleClick(e.target.value)
  }

  return (
  <button className={`button ${className}`} onClick={handleButtonClick} value={value}>{value}</button>
  )
}

export default Button