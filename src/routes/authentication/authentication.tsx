import { AuthenticationContainer } from './styled'
import { Outlet } from 'react-router-dom'

const Authentication = (): React.JSX.Element => {
  return (
    <AuthenticationContainer>
      <Outlet />
    </AuthenticationContainer>
  )
}

export default Authentication
