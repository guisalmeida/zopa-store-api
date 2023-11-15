import { useState, useEffect, ChangeEvent, FormEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import {
  googleSignInstart,
  emailSingInStart,
} from '../../store/actions/userActions'

import { selectCurrentUser } from '../../store/selectors/userSelectors'

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

const SignInForm = (): React.JSX.Element => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [formFields, setFormFields] = useState(defaultFormFields)
  const { email, password } = formFields
  const currentUser = useSelector(selectCurrentUser)

  const resetForm = () => {
    setFormFields(defaultFormFields)
  }

  const signInWithGoogle = async (): Promise<void> => {
    dispatch(googleSignInstart())
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setFormFields({ ...formFields, [name]: value })
  }

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault()

    dispatch(emailSingInStart(email, password))
    resetForm()
  }

  useEffect(() => {
    if (currentUser) {
      navigate('/')
    }
  }, [currentUser])

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
