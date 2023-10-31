import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase'

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
  const { email, password } = formFields

  const resetForm = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  const handleChange = event => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async event => {
    event.preventDefault()

    try {
      await signInAuthUserWithEmailAndPassword(email, password)

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
      <h2>Entrar com email e senha</h2>
      <h2>
        Não tem uma conta? <Link to="/auth/sign-up">Criar conta</Link>
      </h2>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          placeholder="Digite email..."
          onChange={handleChange}
          required
        />
        <FormInput
          label="Senha"
          type="password"
          name="password"
          value={password}
          placeholder="Digite sua senha..."
          onChange={handleChange}
          required
        />
        <ButtonsContaner>
          <Button buttonType="base" type="submit">
            Entrar
          </Button>
          <Button buttonType="google" type="button" onClick={signInWithGoogle}>
            Entrar com Google
          </Button>
        </ButtonsContaner>
      </form>
    </SignContainer>
  )
}

export default SignInForm
