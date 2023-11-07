export const setIsMobileOpen = bool => {
  return { type: 'SET_IS_MOBILE_OPEN', payload: bool }
}

export const checkUserSession = () => ({ type: 'CHECK_USER_SESSION' })

export const googleSignInstart = () => ({ type: 'GOOGLE_SIGNIN_START' })
export const emailSingInStart = (email, password) => ({
  type: 'EMAIL_SIGNIN_START',
  payload: { email, password },
})
export const signInSuccess = user => {
  return { type: 'SIGN_IN_SUCCESS', payload: user }
}
export const signInFailed = error => ({
  type: 'SIGN_IN_FAILED',
  payload: error,
})

export const signUpStart = (email, password, displayName) => ({
  type: 'SIGN_UP_START',
  payload: { email, password, displayName },
})
export const signUpSuccess = (user, additionalInfo) => ({
  type: 'SIGN_UP_SUCCESS',
  payload: { user, additionalInfo },
})
export const signUpFailed = error => ({
  type: 'SIGN_UP_FAILED',
  payload: error,
})

export const signOutStart = () => ({ type: 'SIGN_OUT_START' })
export const signOutSuccess = () => ({ type: 'SIGN_OUT_SUCCESS' })
export const signOutFailed = error => ({
  type: 'SIGN_OUT_FAILED',
  payload: error,
})
