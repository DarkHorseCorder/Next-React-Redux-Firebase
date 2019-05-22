import React, {Component} from 'react'
import { connect } from 'react-redux'
import { incrementCount, decrementCount, resetCount } from '../actions/action_counter';

class Counter extends Component {
  increment = () => {
    const {dispatch} = this.props
    dispatch(incrementCount())
  }

  decrement = () => {
    const {dispatch} = this.props
    dispatch(decrementCount())
  }

  reset = () => {
    const {dispatch} = this.props
    dispatch(resetCount())
  }

  render () {
    console.log(this.props);
    const { counter } = this.props
    return (
      <div>
        <h1>Count: <span>{counter.count}</span></h1>
        <button onClick={this.increment}>+1</button>
        <button onClick={this.decrement}>-1</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    )
  }
}

function mapStateToProps (state) {
  const {counter} = state
  return {counter}
}

export default connect(mapStateToProps)(Counter)
