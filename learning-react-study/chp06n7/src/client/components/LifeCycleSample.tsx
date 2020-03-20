import React, { Component } from 'react'
import { LifeCycleSampleState, LifeCycleSampleProp } from 'models/LifeCycleSampleModel'

class LifeCycleSample extends Component<LifeCycleSampleProp, LifeCycleSampleState> {
  state = {
    number: 0,
    color: ''
  }

  myRef: HTMLHeadingElement | null =  null

  constructor(props: LifeCycleSampleProp) {
    super(props)
    console.log('constructor')
  }

  static getDerivedStateFromProps(nextProps: LifeCycleSampleProp, prevState: LifeCycleSampleState) {
    console.log('getDerivedStateFromProps')
    if(nextProps.color !== prevState.color) {
      return { color: nextProps.color}
    }
    return null
  }
  componentDidMount() {
    console.log('componentDidMount')
  }
  shouldComponentUpdate(nextProps: LifeCycleSampleProp, nextState: LifeCycleSampleState) {
    console.log('shouldComponentUpdate')
    return nextState.number % 10 !== 4
  }
  componentWillUnmount() {
    console.log('componentWillUnmount')
  }

  handleClick = () => {
    const { number } = this.state
    this.setState({
      number: number + 1
    })
  }

  getSnapshotBeforeUpdate(prevProps: LifeCycleSampleProp, prevState: LifeCycleSampleState) {
    console.log('getSnapshotBeforeUpdate')

    if(prevProps.color !== this.props.color) {
      return this.myRef!.style.color
    }
    return null
  }

  componentDidUpdate(prevProps: LifeCycleSampleProp, prevState: LifeCycleSampleState, snapshot: LifeCycleSampleState) {
    console.log('componentDidUpdate', prevProps, prevState)
    if(snapshot) {
      console.log('before update color', snapshot)
    }
  }
  render() {
    console.log('render')
    const style = {
      color: this.props.color
    }
    const { number, color } = this.state
    return (
      <div>
        <h1 style={style} ref={ref => this.myRef = ref}>
          {number}
        </h1>
        <p>color: {color}</p>
        <button onClick={this.handleClick}>
          더하기
        </button>
      </div>
    )
  }
}

export default LifeCycleSample
