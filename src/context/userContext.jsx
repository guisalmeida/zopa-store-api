import { createContext, useReducer, useEffect } from 'react'
import {
  onAuthStateChangeListener,
  createUserDocumentFromAuth,
} from '../utils/firebase'
import PropTypes from 'prop-types'

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
})

const INITIAL_STATE = {
  currentUser: null,
}

const userReducer = (state, action) => {
  const { type, payload } = action

  switch (type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: payload,
      }
    default:
      throw new Error(`
        Unhandled type ${type} in userReducer!
      `)
  }
}

export const UserProvider = ({ children }) => {
  const [{ currentUser }, dispatch] = useReducer(userReducer, INITIAL_STATE)

  const setCurrentUser = user => {
    dispatch({ type: 'SET_CURRENT_USER', payload: user })
  }

  const value = { currentUser, setCurrentUser }

  useEffect(() => {
    const unsubscribe = onAuthStateChangeListener(user => {
      if (user) {
        createUserDocumentFromAuth(user)
      }
      setCurrentUser(user)
    })

    return unsubscribe
  }, [])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
