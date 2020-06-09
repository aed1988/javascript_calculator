import React from 'react'

const Button = ({value, handleClick, className}) => {

  return (
  <button className={`button ${className}`} onClick={e => handleClick(e)} value={value}>{value}</button>
  )
}

export default Button