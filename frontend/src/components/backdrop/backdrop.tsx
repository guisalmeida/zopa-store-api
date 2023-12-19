import React from 'react'
import { BackdropContainer } from './styled'

type BackdropProps = {
  show: boolean
  handleShow: (bool: boolean) => void
}

const Backdrop = ({ show, handleShow }: BackdropProps): React.JSX.Element => {
  return (
    <BackdropContainer $isShowCart={show} onClick={() => handleShow(false)} />
  )
}

export default Backdrop
