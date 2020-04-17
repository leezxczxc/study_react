import { bindActionCreators, ActionCreator } from 'redux'
import { useDispatch } from 'react-redux'
import { useMemo } from 'react'

// function useActions<T>(actions: Array<ActionCreator<T>>, deps: Array<any>): Array<ActionCreator<T>> {
const useActions = <T extends Object>(actions: Array<ActionCreator<T>>, deps: Array<any>): Array<ActionCreator<T>> => {
  const dispatch = useDispatch()
  return useMemo(
    () => {
      if (Array.isArray(actions)) {
        return actions.map(a => bindActionCreators(a, dispatch))
      }
      return bindActionCreators(actions, dispatch)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [dispatch, ...deps] : deps
  )
}

export default useActions