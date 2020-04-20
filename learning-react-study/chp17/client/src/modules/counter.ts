import { createAction, handleActions } from 'redux-actions'
import { CounterStoreState, CounterActionType } from 'models/CounterModel'

const INCREASE: CounterActionType = 'counter/INCREASE'
const DECREASE: CounterActionType = 'counter/DECREASE'

export const increase = createAction(INCREASE.toString())
export const decrease = createAction(DECREASE.toString())

const initialState: CounterStoreState = {
  number: 0,
}

const counter = handleActions<CounterStoreState>(
  {
    [INCREASE.toString()]: (state) => ({ number: state.number.valueOf() + 1 }),
    [DECREASE.toString()]: (state) => ({ number: state.number.valueOf() - 1 }),
  },
  initialState,
);

export default counter
