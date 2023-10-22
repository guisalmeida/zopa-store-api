import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  createUserDocumentFromAuth,
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase'
import { UserContext } from '../../context/userContext'

import Button from '../button'
import FormInput from '../formInput'

import {
  SignContainer,
  ButtonsContaner,
} from '../../routes/authentication/styled'

const defaultFormFields = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { setCurrentUser } = useContext(UserContext)
  const { email, password } = formFields

  const resetForm = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    const { user } = await signInWithGooglePopup()
    await createUserDocumentFromAuth(user)
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      const { user } = await signInAuthUserWithEmailAndPassword(email, password)
      setCurrentUser(user)
      resetForm()
    } catch (error) {
      switch (error.code) {
        case 'auth/wrong-password':
          // TODO implement toastfy instead alert
          alert('Incorrect Password!')
          break
        case 'auth/user-not-found':
          // TODO implement toastfy instead alert
          alert('No user associated with this email!')
          break
        default:
          console.error(error)
      }
    }
  }

  return (
    <SignContainer>
      <h2>
        Don&apos;t have an account? <Link to="/auth/sign-up">Sign Up</Link>
      </h2>

      <h3>Sign in with your email and password</h3>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />
        <ButtonsContaner>
          <Button buttonType="base" type="submit">
            Sign In
          </Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            Sign In With Google
          </Button>
        </ButtonsContaner>
      </form>
    </SignContainer>
  )
}

export default SignInForm
