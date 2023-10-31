import { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import Button from '../button'
import FormInput from '../formInput'

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  signInWithGooglePopup,
} from '../../utils/firebase'

import {
  SignContainer,
  ButtonsContaner,
} from '../../routes/authentication/styled'

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields

  const handleChange = event => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async event => {
    event.preventDefault()

    if (password !== confirmPassword) {
      // TODO implement toastfy instead alert
      alert('Password do not match!')
      return
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password)
      await createUserDocumentFromAuth(user, { displayName })

      resetForm()
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        // TODO implement toastfy instead alert
        alert('Email already in use!!')
      }
      console.error(error)
    }
  }

  const resetForm = () => {
    setFormFields(defaultFormFields)
  }

  const signUpWithGoogle = async () => {
    await signInWithGooglePopup()
  }

  return (
    <SignContainer>
      <h2>Criar conta com email e senha</h2>
      <h2>
        Já possui conta? <Link to="/auth/sign-in">Entrar</Link>
      </h2>

      <form onSubmit={handleSubmit}>
        <FormInput
          label="Nome"
          type="text"
          name="displayName"
          value={displayName}
          placeholder="Digite seu nome..."
          onChange={handleChange}
          required
        />

        <FormInput
          label="Email"
          type="email"
          name="email"
          value={email}
          placeholder="Digite seu email..."
          onChange={handleChange}
          required
        />

        <FormInput
          label="Senha"
          type="password"
          name="password"
          value={password}
          placeholder="Digite uma senha..."
          onChange={handleChange}
          required
        />

        <FormInput
          label="Confirme senha"
          type="password"
          name="confirmPassword"
          placeholder="Repita sua senha..."
          value={confirmPassword}
          onChange={handleChange}
          required
        />

        <ButtonsContaner>
          <Button buttonType="base" type="submit">
            Cadastrar
          </Button>
          <Button buttonType="google" type="button" onClick={signUpWithGoogle}>
            Cadastre-se com Google
          </Button>
        </ButtonsContaner>
      </form>
    </SignContainer>
  )
}

export default SignUp
