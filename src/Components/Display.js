import React from 'react'
import './Display.sass'

const Display = ({ calculation, power }) => {

  return (
    <div id="display" className="display">
      <div className="display--text">
        {(
        (!power)
          ? 'Power is off'
          : !calculation
          ? 'Nothing clicked yet' 
          : calculation
        )}
      </div>
    </div>
  )
}


export default Display
