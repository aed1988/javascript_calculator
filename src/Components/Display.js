import React from 'react'

const Display = ({ calculation, power }) => {

  const displayString = (
    (!power)
      ? 'Power is off'
        : calculation.length === 0
          ? 0
            : calculation.indexOf('=') === -1
              ? calculation
              : calculation[0].toPrecision(4)
    )

  return (
    <div id="display" className="display">
      <div className="display--text">
        {displayString}
      </div>
    </div>
  )
}


export default Display
