import React from 'react'
import './Display.sass'

const Display = ({ calculation, power }) => {

  return (
    <div id="display" className="display">
      <div className="display--text">
        {(
        (!power)
          ? 'Power is off'
            : calculation.length === 0
              ? 0
                : calculation.indexOf('=') === -1
                  ? calculation
                  : calculation[0]
        )}
      </div>
    </div>
  )
}


export default Display
