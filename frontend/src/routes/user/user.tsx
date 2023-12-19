import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/selectors/userSelectors'
import {
  deleteStart,
  signOutStart,
  updateStart,
} from '../../store/actions/userActions'
import Button from '../../components/button'
import FormInput from '../../components/formInput'

import { SignContainer, ButtonsContainer } from '../authentication/styled'
import { ButtonsContainerWarn } from './styled'

const User = (): React.JSX.Element => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const currentUser = useSelector(selectCurrentUser)
  const userToUpdate = {
    username: currentUser?.username ? currentUser.username : '',
    email: currentUser?.email ? currentUser.email : '',
    password: '',
    confirmPassword: '',
  }
  const [updatedUser, setUpdatedUser] = useState(userToUpdate)

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value }: { name: string; value: string } = event.target

    setUpdatedUser(prevState => {
      return { ...prevState, [name]: value }
    })
  }

  const handleLogOut = (): void => {
    dispatch(signOutStart())
  }

  const handleDelete = (): void => {
    dispatch(deleteStart())
  }

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault()

    if (updatedUser) {
      dispatch(updateStart(updatedUser.email, updatedUser.username))
    }
  }

  useEffect(() => {
    if (!currentUser) {
      navigate('/')
    }
  }, [currentUser])

  return (
    <>
      <SignContainer>
        <h2>Atualizar dados cadastrais:</h2>

        <form onSubmit={handleSubmit}>
          <FormInput
            label="Nome"
            type="text"
            name="username"
            value={updatedUser?.username}
            placeholder="Digite seu nome..."
            onChange={handleChange}
            required
          />

          <FormInput
            label="Email"
            type="email"
            name="email"
            value={updatedUser?.email}
            placeholder="Digite seu email..."
            onChange={handleChange}
            required
          />

          {/* <FormInput
            label="Senha"
            type="password"
            name="password"
            value={updatedUser.password}
            placeholder="Digite uma senha..."
            onChange={handleChange}
            required
          />

          <FormInput
            label="Confirme senha"
            type="password"
            name="confirmPassword"
            placeholder="Repita sua senha..."
            value={updatedUser.confirmPassword}
            onChange={handleChange}
            required
          /> */}

          <ButtonsContainer>
            <Button buttonType="base" type="submit">
              Salvar dados
            </Button>
          </ButtonsContainer>
        </form>

        <ButtonsContainerWarn>
          <Button buttonType="warn" onClick={handleLogOut}>
            Sair
          </Button>
          <Button buttonType="warn" onClick={handleDelete}>
            Deletar conta
          </Button>
        </ButtonsContainerWarn>
      </SignContainer>
    </>
  )
}

export default User
