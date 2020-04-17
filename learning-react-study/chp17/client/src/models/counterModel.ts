export interface CounterActionType extends String {}

export type CounterState = {
  number: Number
}

export type CounterProps = {
  number: Number,
  onIncrease: (e: React.MouseEvent<HTMLButtonElement>) => void
  onDecrease: (e: React.MouseEvent<HTMLButtonElement>) => void
}