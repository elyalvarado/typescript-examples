import React from 'react'

interface ICounterProps {
  initialValue: number
  incrementBy: number
}
interface ICounterState {
  currentValue: number
  timesClicked: number
}
class Counter extends React.Component<ICounterProps, ICounterState> {
  state: Readonly<ICounterState> = {
    currentValue: this.props.initialValue,
    timesClicked: 0,
  }

  clickHandler = () => {
    this.setState(prevState => ({
      currentValue: prevState.currentValue + this.props.incrementBy,
      timesClicked: prevState.timesClicked + 1,
    }))
  }

  render() {
    const { currentValue, timesClicked, notExistingState } = this.state
    const { incrementBy, notExistingProp } = this.props

    this.state.timesClicked += 1

    // return (
    //   <div>
    //     <p>Current counter value: {currentValue}</p>
    //     <p>Changing by: {incrementBy}</p>
    //     <p>Times Clicked: {timesClicked}</p>
    //     <button onClick={this.clickHandler}>Change</button>
    //   </div>
    // )
  }
}
