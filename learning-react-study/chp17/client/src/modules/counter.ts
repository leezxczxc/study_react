import { createAction, handleActions } from 'redux-actions'
import { CounterState, CounterActionType } from 'models/CounterModel'

const INCREASE: CounterActionType = 'counter/INCREASE'
const DECREASE: CounterActionType = 'counter/DECREASE'

export const increase = createAction(INCREASE.toString())
export const decrease = createAction(DECREASE.toString())

const initialState: CounterState = {
  number: 0,
}

const counter = handleActions<CounterState>(
  {
    [INCREASE.toString()]: (state) => ({ number: state.number.valueOf() + 1 }),
    [DECREASE.toString()]: (state) => ({ number: state.number.valueOf() - 1 }),
  },
  initialState,
);

export default counter
