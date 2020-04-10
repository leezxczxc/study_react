
type ColorState = {
  color: String,
  subcolor: String
}
type ColorAction = {
  setColor: (str: String) => void,
  setSubcolor: (str: String) => void
}
export type ColorContextType = {
  state: ColorState,
  actions: ColorAction
}
