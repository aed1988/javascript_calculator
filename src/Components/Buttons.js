import React from 'react'
import './Button.sass'
import Button from './Button'

const Buttons = ({handleClick, handleClearAll, ...restProps}) => {

  return (
    <div className="calculator-container">
      <div className="calculator-buttons">
        <Button id={'AC'} value={'A/C'} handleClick={handleClick} className={"button button__clear-all all-clear"}/>
        <Button id={0} value={0} handleClick={handleClick} className={"button button__number zero"}/>
        <Button id={1} value={1} handleClick={handleClick} className={"button button__number one"}/>
        <Button id={2} value={2} handleClick={handleClick} className={"button button__number two"}/>
        <Button id={3} value={3} handleClick={handleClick} className={"button button__number three"}/>
        <Button id={4} value={4} handleClick={handleClick} className={"button button__number four"}/>
        <Button id={5} value={5} handleClick={handleClick} className={"button button__number five"}/>
        <Button id={6} value={6} handleClick={handleClick} className={"button button__number six"}/>
        <Button id={7} value={7} handleClick={handleClick} className={"button button__number seven"}/>
        <Button id={8} value={8} handleClick={handleClick} className={"button button__number eight"}/>
        <Button id={9} value={9} handleClick={handleClick} className={"button button__number nine"}/>
        {/* <Button id={'.'} value={'.'} handleClick={handleClick} className={"button button__number decimal"}/> */}
        <Button id={'*'} value={'*'} handleClick={handleClick} className={"button button__operation multiply"}/>
        <Button id={'/'} value={'/'} handleClick={handleClick} className={"button button__operation divide"}/>
        <Button id={'+'} value={'+'} handleClick={handleClick} className={"button button__operation plus"}/>
        <Button id={'-'} value={'-'} handleClick={handleClick} className={"button button__operation subtract"}/>
        <Button id={'='} value={'='} handleClick={handleClick} className={"button button__calculation equals"}/>
      </div>
    </div>
  )
}

export default Buttons
