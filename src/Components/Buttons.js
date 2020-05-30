import React from 'react'
import './Button.sass'
import Button from './Button'

const Buttons = ({handleClick, handleClearAll}) => {

  return (
    <div className="buttons">
      <Button key={7} value={7} handleClick={handleClick} className={"number"}/>
      <Button key={8} value={8} handleClick={handleClick} className={"number"}/>
      <Button key={9} value={9} handleClick={handleClick} className={"number"}/>
      <Button key={'*'} value={'*'} handleClick={handleClick} className={"operation"}/>
      <Button key={4} value={4} handleClick={handleClick} className={"number"}/>
      <Button key={5} value={5} handleClick={handleClick} className={"number"}/>
      <Button key={6} value={6} handleClick={handleClick} className={"number"}/>
      <Button key={'/'} value={'/'} handleClick={handleClick} className={"operation"}/>
      <Button key={1} value={1} handleClick={handleClick} className={"number"}/>
      <Button key={2} value={2} handleClick={handleClick} className={"number"}/>
      <Button key={3} value={3} handleClick={handleClick} className={"number"}/>
      <Button key={'-'} value={'-'} handleClick={handleClick} className={"operation"}/>
      <Button key={'AC'} value={'A/C'} handleClick={handleClearAll} className={"clear-all"}/>
      <Button key={0} value={0} handleClick={handleClick} className={"number"}/>
      <Button key={'='} value={'='} handleClick={handleClick} className={"calculation"}/>
      <Button key={'+'} value={'+'} handleClick={handleClick} className={"operation"}/>
    </div>
  )
}

export default Buttons
