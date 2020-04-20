export interface CounterActionType extends String {}

export type CounterStoreState = {
  number: Number
}

export type CounterContainerState = Number

export type CounterProps = {
  number: Number,
  onIncrease: (e: React.MouseEvent<HTMLButtonElement>) => void
  onDecrease: (e: React.MouseEvent<HTMLButtonElement>) => void
}