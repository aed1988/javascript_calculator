import React, { Component } from 'react'
import Display from './Display'
import CalculatorButtons from './CalculatorButtons'

export default class Calculator extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      calculation: [],
      lastEntryType: 'number',
      operatorInArr: false,
      operatorIndex: null,
      decimalInArr: false
    }
  }


  handleClick = (event) => {
    const input = event.target.value
    
    if (!this.props.power) return
    if (input === 'A/C')  return this.clearAll()
    // if (input === "." && !this.state.decimalInArr) return 

    const inputNumber = parseInt(input) // Determines if input is an operator or a number

    // Operator
    if (isNaN(inputNumber)) this.addOperatorToState(input)
    // Number
    else this.addNumberToState(input)
  }



  addNumberToState = (input) => {
    if (this.state.calculation.length === 0 && input === '0') return 
    //  Handles case where last action was "=".
    if (this.state.calculation.indexOf('=') !== -1) {
      this.clearAll()
      this.setState({
        calculation: [input]
      })
    } else {
      this.setState((prevState) => ({
      calculation: [...prevState.calculation, input],
      lastEntryType: 'number'
    }))}
  }

  addOperatorToState = (input) => {
    let nextIndex = this.state.calculation.length

    // Return if operation is first entry OR equals is selected when no operator has been entered at all
    if (this.state.calculation.length === 0 || (input === '=' && !this.state.operatorInArr)) return

    // Replaces previous operation if two operations entered consecutively
    if (this.state.lastEntryType === 'operation') {
      this.setState((prevState) => ({
        calculation: [prevState.calculation.slice(0, this.state.operatorIndex), input].flat()
      }))
    } 

    // Add to arr if no operator is already in arr
    else if (!this.state.operatorInArr) {
      this.setState((prevState) => ({
        calculation: [...prevState.calculation, input],
        operatorInArr: true,
        lastEntryType: 'operation',
        operatorIndex: nextIndex
      }))
    } 
    // This will be the case where there is an operator in the arr and the last entry is a number.  This will resolve the calculation and set the result to the first entry in a new arr and add the operator after.
    else {
      this.evaluateArrayToResult();
      let currentValue = this.evaluateArrayToResult();
      this.setState({
        calculation: [currentValue, input],
        lastEntryType: 'operation',
        operatorIndex: 1
        })
      }
    }

  evaluateArrayToResult = (arr = this.state.calculation) => {
    const OpIndex = this.state.operatorIndex;
    const leftSideNumber = parseFloat(arr.slice(0,OpIndex).join(''));
    const rightSideNumber = parseFloat(arr.slice(OpIndex + 1,arr.length).join(''));
    let result;
    switch (arr[this.state.operatorIndex]) {
      case '+':
        result = leftSideNumber + rightSideNumber
        break;
      case '-':
        result = leftSideNumber - rightSideNumber
        break;
      case '*':
        result = leftSideNumber * rightSideNumber
        break
      case '/':
        result = leftSideNumber / rightSideNumber
        break;
      default:
        alert('Failing in evaluateArrayToResult()')
        break;
    }
    return result
  }

  clearAll = () => {
    this.setState(() => ({
      calculation: [],
      lastEntryType: 'number',
      operatorInArr: false,
      operatorIndex: null
    }))
  }
  
  render() {
    return (
      <div className='calculator'>
        <Display calculation={this.state.calculation} power={this.props.power}/>
        <CalculatorButtons handleClick={(e) => this.handleClick(e)}/>
      </div >
    )
  }
}