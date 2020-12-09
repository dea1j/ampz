import React, { Component } from "react"
import FlipNumbers from "react-flip-numbers"
import "../assets/timer.css"

class Timer extends Component {
  state = {
    timeRemaining: 10000,
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        timeRemaining: this.state.timeRemaining - 1,
      })
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <div className="timer">
        <FlipNumbers
          play
          color="#db9a02"
          background="#333333"
          width={50}
          height={50}
          numbers={`${this.state.timeRemaining}`}
        />
      </div>
    )
  }
}

export default Timer
