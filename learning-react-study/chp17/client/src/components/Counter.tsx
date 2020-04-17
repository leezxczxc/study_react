import React from 'react';
import { CounterProps } from 'models/CounterModel';

const Counter = React.memo<CounterProps>(({ number, onIncrease, onDecrease }) => {
  console.group('counter component')
  console.log('number', number)
  console.groupEnd()
  return (
    <div>
      <h1>{number}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  )
})

export default Counter;
