import React, { Component } from 'react'
import Display from './Display'
import Buttons from './Buttons'

export default class Calculator extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      calculation: [],
      lastEntryType: '',
      currentValue: null,
      operatorInArr: false
    }
  }


  handleNonClearClick = (input) => {
    if (!this.props.power) return
    const inputNumber = parseInt(input)
    if (isNaN(inputNumber)) this.addOperatorToState(input)
    else this.addNumberToState(input)
  }

  handleClearAll = () => {
    this.setState(() => ({
      calculation: [],
      lastEntryType: '',
      currentValue: null,
      operatorInArr: false
    }))
  }

  addNumberToState = (input) => {
    if (this.state.currentValue !== null && this.state.lastEntryType === 'number') {
      console.log('Don\'t add number')
    }
    else if (this.state.currentValue === null) {
      this.setState((prevState) => ({
        calculation: [...prevState.calculation, input],
        lastEntryType: 'number'
      }), () => {console.log('added number')})
    }
  }

  addOperatorToState = (input) => {
    if (this.state.calculation.length === 0) return
    if (this.state.lastEntryType === 'operation') {
      this.setState((prevState) => ({
        calculation: [prevState.calculation.pop(), input]
      }))
    } else if (!this.state.operatorInArr) {
      this.setState((prevState) => ({
        calculation: [...prevState.calculation, input],
        operatorInArr: true,
        lastEntryType: 'operation'
      }))
    } else {
      this.setState({
        currentValue: eval(this.state.calculation.join(''))
      }, () => {
        this.setState({
          calculation: [this.state.currentValue, input],
          lastEntryType: 'operation',
          currentValue: null
        })
      })
    }
  }
  
  render() {
    return (
      <>
        <Display calculation={this.state.calculation.join('')} power={this.props.power}/>
        <Buttons handleClick={(e) => this.handleNonClearClick(e)} handleClearAll={() => this.handleClearAll()}/>
      </>
    )
  }
}