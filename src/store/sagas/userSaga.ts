import { takeLatest, all, call, put } from 'typed-redux-saga'

import {
  signInFailed,
  signInSuccess,
  signOutSuccess,
  signOutFailed,
  signUpSuccess,
  signUpFailed,
  TEmailSingInStart,
  TSignUpStart,
  TSignUpSuccess,
  TSignInFailed,
  TSignOutFailed,
  TSignUpFailed,
} from '../actions/userActions'

import {
  TAdditionalInfo,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
} from '../../utils/firebase'
import { User } from 'firebase/auth'

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalInfo?: TAdditionalInfo,
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInfo,
    )
    if (userSnapshot) {
      yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }))
    }
  } catch (error) {
    yield* put(signInFailed(error as Error))
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser)
    if (!userAuth) return
    yield* call(getSnapshotFromUserAuth, userAuth)
  } catch (error) {
    yield* put(signInFailed(error as Error))
  }
}

export function* onCheckUserSession() {
  yield* takeLatest('CHECK_USER_SESSION', isUserAuthenticated)
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup)
    yield* call(getSnapshotFromUserAuth, user)
  } catch (error) {
    yield* put(signInFailed(error as Error))
  }
}

export function* signInWithEmail({
  payload: { email, password },
}: TEmailSingInStart) {
  try {
    const userCredential = yield* call(
      signInAuthUserWithEmailAndPassword,
      email,
      password,
    )

    if (userCredential) {
      const { user } = userCredential
      yield* call(getSnapshotFromUserAuth, user)
    }
  } catch (error) {
    yield* put(signInFailed(error as Error))
  }
}

export function* signUpWithEmail({
  payload: { email, password, displayName },
}: TSignUpStart) {
  try {
    const userCredential = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password,
    )

    if (userCredential) {
      const { user } = userCredential
      yield* put(signUpSuccess(user, { displayName }))
    }
  } catch (error) {
    yield* put(signUpFailed(error as Error))
  }
}

export function* signInAfterSignUp({
  payload: { user, additionalInfo },
}: TSignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, additionalInfo)
}

export function* onSignUpSuccess() {
  yield* takeLatest('SIGN_UP_SUCCESS', signInAfterSignUp)
}

export function* onSignUpStart() {
  yield* takeLatest('SIGN_UP_START', signUpWithEmail)
}

export function* onEmailSignInStart() {
  yield* takeLatest('EMAIL_SIGNIN_START', signInWithEmail)
}

export function* onGoogleSignInStart() {
  yield* takeLatest('GOOGLE_SIGNIN_START', signInWithGoogle)
}

export function* signOut() {
  try {
    yield* call(signOutUser)
    yield* put(signOutSuccess())
  } catch (error) {
    yield* put(signOutFailed(error as Error))
  }
}

export function* onSignOutStart() {
  yield* takeLatest('SIGN_OUT_START', signOut)
}

export function* showError({
  payload,
}: TSignInFailed | TSignOutFailed | TSignUpFailed) {
  yield* call(alert, payload.message)
}

export function* onSignInFailed() {
  yield* takeLatest('SIGN_IN_FAILED', showError)
}

export function* onSignUpFailed() {
  yield* takeLatest('SIGN_UP_FAILED', showError)
}

export function* onSignOutFailed() {
  yield* takeLatest('SIGN_OUT_FAILED', showError)
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
    call(onSignInFailed),
    call(onSignUpFailed),
    call(onSignOutFailed),
  ])
}
