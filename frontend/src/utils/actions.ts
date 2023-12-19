import { AnyAction } from 'redux'
import { TAction, TActionWithPayload } from '../store/actions/actionTypes'

// This type is responsable to check if the action passed
// is going to be one of those expected in the reducer.
// https://www.typescriptlang.org/docs/handbook/2/narrowing.html#using-type-predicates
type TMatchable<AC extends () => AnyAction> = AC & {
  type: ReturnType<AC>['type']
  match(action: AnyAction): action is ReturnType<AC>
}

export function withMatcher<AC extends () => AnyAction & { type: string }>(
  actionCreator: AC,
): TMatchable<AC>

export function withMatcher<
  AC extends (...args: any[]) => AnyAction & { type: string },
>(actionCreator: AC): TMatchable<AC>

export function withMatcher(actionCreator: Function) {
  const type = actionCreator().type
  return Object.assign(actionCreator, {
    type,
    match(action: AnyAction) {
      return action.type === type
    },
  })
}

export function createAction<T extends string, P>(
  type: T,
  payload: P,
): TActionWithPayload<T, P>

export function createAction<T extends string>(
  type: T,
  payload: void,
): TAction<T>

export function createAction<T extends string, P>(type: T, payload: P) {
  return { type, payload }
}
