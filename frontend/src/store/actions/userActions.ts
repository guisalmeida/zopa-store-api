import { USER_ACTION_TYPE, TActionWithPayload, TAction } from './actionTypes'
import { createAction, withMatcher } from '../../utils/actions'
import { TCurrentUser } from '../../types'
import { AxiosError } from 'axios'

export type TSetIsMobileOpen = TActionWithPayload<
  typeof USER_ACTION_TYPE.SET_IS_MOBILE_OPEN,
  boolean
>

export type TCheckUserSession = TAction<
  typeof USER_ACTION_TYPE.CHECK_USER_SESSION
>

export type TSingInStart = TActionWithPayload<
  typeof USER_ACTION_TYPE.SIGN_IN_START,
  { email: string; password: string }
>
export type TSignInSuccess = TActionWithPayload<
  typeof USER_ACTION_TYPE.SIGN_IN_SUCCESS,
  TCurrentUser
>
export type TSignInFailed = TActionWithPayload<
  typeof USER_ACTION_TYPE.SIGN_IN_FAILED,
  Error
>

export type TUpdateStart = TActionWithPayload<
  typeof USER_ACTION_TYPE.UPDATE_START,
  {
    email: string
    username: string
  }
>
export type TUpdateSuccess = TActionWithPayload<
  typeof USER_ACTION_TYPE.UPDATE_SUCCESS,
  TCurrentUser
>
export type TUpdateFailed = TActionWithPayload<
  typeof USER_ACTION_TYPE.UPDATE_FAILED,
  Error
>

export type TSignUpStart = TActionWithPayload<
  typeof USER_ACTION_TYPE.SIGN_UP_START,
  {
    email: string
    password: string
    username: string
  }
>
export type TSignUpSuccess = TActionWithPayload<
  typeof USER_ACTION_TYPE.SIGN_UP_SUCCESS,
  TCurrentUser
>
export type TSignUpFailed = TActionWithPayload<
  typeof USER_ACTION_TYPE.SIGN_UP_FAILED,
  Error
>

export type TSignOutStart = TAction<typeof USER_ACTION_TYPE.SIGN_OUT_START>
export type TSignOutSuccess = TAction<typeof USER_ACTION_TYPE.SIGN_OUT_SUCCESS>
export type TSignOutFailed = TActionWithPayload<
  typeof USER_ACTION_TYPE.SIGN_OUT_FAILED,
  Error
>

export type TDeleteStart = TAction<typeof USER_ACTION_TYPE.DELETE_START>
export type TDeleteSuccess = TAction<typeof USER_ACTION_TYPE.DELETE_SUCCESS>
export type TDeleteFailed = TActionWithPayload<
  typeof USER_ACTION_TYPE.DELETE_FAILED,
  Error
>

export const setIsMobileOpen = withMatcher(
  (bool: boolean): TSetIsMobileOpen =>
    createAction(USER_ACTION_TYPE.SET_IS_MOBILE_OPEN, bool),
)

export const checkUserSession = withMatcher(
  (): TCheckUserSession => createAction(USER_ACTION_TYPE.CHECK_USER_SESSION),
)

export const singInStart = withMatcher(
  (email: string, password: string): TSingInStart =>
    createAction(USER_ACTION_TYPE.SIGN_IN_START, { email, password }),
)

export const signInSuccess = withMatcher(
  (user: TCurrentUser): TSignInSuccess =>
    createAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS, user),
)

export const signInFailed = withMatcher(
  (error: Error | AxiosError): TSignInFailed =>
    createAction(USER_ACTION_TYPE.SIGN_IN_FAILED, error),
)

export const signUpStart = withMatcher(
  (email: string, password: string, username: string): TSignUpStart =>
    createAction(USER_ACTION_TYPE.SIGN_UP_START, {
      email,
      password,
      username,
    }),
)

export const updateStart = withMatcher(
  (email: string, username: string): TUpdateStart =>
    createAction(USER_ACTION_TYPE.UPDATE_START, {
      email,
      username,
    }),
)

export const updateSuccess = withMatcher(
  (user: TCurrentUser): TUpdateSuccess =>
    createAction(USER_ACTION_TYPE.UPDATE_SUCCESS, user),
)

export const updateFailed = withMatcher(
  (error: Error): TUpdateFailed =>
    createAction(USER_ACTION_TYPE.UPDATE_FAILED, error),
)

export const signUpSuccess = withMatcher(
  (user: TCurrentUser): TSignUpSuccess =>
    createAction(USER_ACTION_TYPE.SIGN_UP_SUCCESS, user),
)

export const signUpFailed = withMatcher(
  (error: Error): TSignUpFailed =>
    createAction(USER_ACTION_TYPE.SIGN_UP_FAILED, error),
)

export const signOutStart = withMatcher(
  (): TSignOutStart => createAction(USER_ACTION_TYPE.SIGN_OUT_START),
)

export const signOutSuccess = withMatcher(
  (): TSignOutSuccess => createAction(USER_ACTION_TYPE.SIGN_OUT_SUCCESS),
)

export const signOutFailed = withMatcher(
  (error: Error): TSignOutFailed =>
    createAction(USER_ACTION_TYPE.SIGN_OUT_FAILED, error),
)

export const deleteStart = withMatcher(
  (): TDeleteStart => createAction(USER_ACTION_TYPE.DELETE_START),
)

export const deleteSuccess = withMatcher(
  (): TDeleteSuccess => createAction(USER_ACTION_TYPE.DELETE_SUCCESS),
)

export const deleteFailed = withMatcher(
  (error: Error): TDeleteFailed =>
    createAction(USER_ACTION_TYPE.DELETE_FAILED, error),
)
