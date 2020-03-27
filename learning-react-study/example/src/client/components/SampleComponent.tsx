import React, { PureComponent, ChangeEvent } from 'react'

import { SampleModelState } from 'models/SampleModel'

class SampleComponent extends PureComponent<{}, SampleModelState> {
  state = {
    username: '',
    message: ''
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    this.setState<never>({
      [name]: value
    })
  }

  handleClick = () => {
    alert(this.state.username.concat(': ').concat(this.state.message))
    this.setState({
      username: '',
      message: ''
    })
  }

  render () {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type='text'
          name='username'
          placeholder='사용자명'
          value={this.state.username}
          onChange={this.handleChange}
          />
          <input
            type='text'
            name='message'
            placeholder='아무거나 입력해 보세요'
            value={this.state.message}
            onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>확인</button>
      </div>
    )
  }
}
export default SampleComponent