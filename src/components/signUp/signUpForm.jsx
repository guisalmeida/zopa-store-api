import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { signUpStart, googleSignInstart } from '../../store/actions/userActions'
import { selectCurrentUser } from '../../store/selectors/userSelectors'

import Button from '../button'
import FormInput from '../formInput'

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
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { displayName, email, password, confirmPassword } = formFields
  const currentUser = useSelector(selectCurrentUser)

  const handleChange = event => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const resetForm = () => {
    setFormFields(defaultFormFields)
  }

  const handleSubmit = async event => {
    event.preventDefault()

    if (password !== confirmPassword) {
      // TODO implement toastfy instead alert
      alert('Password do not match!')
      return
    }

    dispatch(signUpStart(email, password, displayName))
    resetForm()
  }

  const signUpWithGoogle = async () => {
    dispatch(googleSignInstart())
  }

  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [currentUser])

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
