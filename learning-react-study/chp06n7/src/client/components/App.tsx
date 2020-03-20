import React from 'react'

import LifeCycleSample from 'components/LifeCycleSample'

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}
class App extends React.Component<{}, {}> {
  state = {
    color: '#000000'
  }
  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    )
  }
}
export default App
