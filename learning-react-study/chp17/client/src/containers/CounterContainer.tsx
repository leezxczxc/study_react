import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from 'components/Counter';
import { increase, decrease } from 'modules/counter';
import AppStoreState from 'models/default';
import { Action } from 'redux';
import { CounterActionType, CounterContainerState } from 'models/CounterModel';

type counterDispatch = () => Action<CounterActionType>

const CounterContainer = () => {
  const number = useSelector<AppStoreState, CounterContainerState>(state => state.counter.number)
  const dispatch = useDispatch();
  const onIncrease = useCallback<counterDispatch>(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback<counterDispatch>(() => dispatch(decrease()), [dispatch]);

  return (
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  )
}

export default CounterContainer
