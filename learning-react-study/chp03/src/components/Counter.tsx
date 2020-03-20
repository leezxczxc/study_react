import * as React from 'react';

interface CounterState {
    number:  number
}

class Counter extends React.Component<{}, CounterState>  {
    constructor() {
        super({});
        this.state = {
            number: 0
        }
        this.clickBtn = this.clickBtn.bind(this);
    }

    public clickBtn(): void {
        const {number} = this.state
        this.setState({
            number: number + 1,
        })
    }

    render() {
        const { number } = this.state
        return <div>
            <h1>{number}</h1>
            <button onClick={this.clickBtn}>
                +1
            </button>
        </div>
    }
}

export default Counter
