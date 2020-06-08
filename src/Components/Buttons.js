import React from 'react'
import './Button.sass'
import Button from './Button'

const Buttons = ({handleClick, handleClearAll, ...restProps}) => {

  return (
    <div className="calculator-container">
      <div className="calculator-buttons">
        <Button key={'AC'} value={'A/C'} handleClick={handleClick} className={"button button__clear-all all-clear"}/>
        <Button key={0} value={0} handleClick={handleClick} className={"button button__number zero"}/>
        <Button key={1} value={1} handleClick={handleClick} className={"button button__number one"}/>
        <Button key={2} value={2} handleClick={handleClick} className={"button button__number two"}/>
        <Button key={3} value={3} handleClick={handleClick} className={"button button__number three"}/>
        <Button key={4} value={4} handleClick={handleClick} className={"button button__number four"}/>
        <Button key={5} value={5} handleClick={handleClick} className={"button button__number five"}/>
        <Button key={6} value={6} handleClick={handleClick} className={"button button__number six"}/>
        <Button key={7} value={7} handleClick={handleClick} className={"button button__number seven"}/>
        <Button key={8} value={8} handleClick={handleClick} className={"button button__number eight"}/>
        <Button key={9} value={9} handleClick={handleClick} className={"button button__number nine"}/>
        <Button key={'.'} value={'.'} handleClick={handleClick} className={"button button__number decimal"}/>
        <Button key={'*'} value={'*'} handleClick={handleClick} className={"button button__operation multiply"}/>
        <Button key={'/'} value={'/'} handleClick={handleClick} className={"button button__operation divide"}/>
        <Button key={'+'} value={'+'} handleClick={handleClick} className={"button button__operation plus"}/>
        <Button key={'-'} value={'-'} handleClick={handleClick} className={"button button__operation subtract"}/>
        <Button key={'='} value={'='} handleClick={handleClick} className={"button button__calculation equals"}/>
      </div>
    </div>
  )
}

export default Buttons
