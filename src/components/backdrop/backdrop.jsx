import { BackdropContainer } from './styled'

const Backdrop = ({ show, handleShow }) => {
  return (
    <BackdropContainer $isShowCart={show} onClick={() => handleShow(false)} />
  )
}

export default Backdrop
