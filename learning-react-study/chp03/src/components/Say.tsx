import * as React from 'react';

interface SayState {
    message:  string,
    color: string
}
const HI = '안녕하세요'
const BYE = '안녕히가세요'

const BLACK = 'black'
const RED = 'red'
const GREEN = 'green'
const BLUE = 'blue'

class Counter extends React.Component<{}, SayState>  {
    constructor() {
        super({});
        this.state = {
            message: HI,
            color: BLACK
        }
        this.clkHi = this.clkHi.bind(this);
        this.clkBye = this.clkBye.bind(this);
        this.setColor = this.setColor.bind(this);
    }

    
    public clkHi(): void {
        this.setState({
            message: HI
        })
    }
    public clkBye(): void {
        this.setState({
            message: BYE
        })
    }
    public setColor(c: string): void {
        this.setState({
            color: c
        })
    }

    render() {
        const {color, message } = this.state
        return (<div>
          <button onClick={this.clkHi}>입장</button>
          <button onClick={this.clkBye}>퇴장</button>
          <h1 style={{ color }}>{message}</h1>
          <button style={{ color: 'red' }} onClick={() => this.setColor('red')}>
            빨간색
          </button>
          <button style={{ color: 'green' }} onClick={() => this.setColor('green')}>
            초록색
          </button>
          <button style={{ color: 'blue' }} onClick={() => this.setColor('blue')}>
            파란색
          </button>
        </div>
        )
    }
}

export default Counter
