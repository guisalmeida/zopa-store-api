import { BackdropContainer } from './styled'
import PropTypes from 'prop-types'

const Backdrop = ({ show, handleShow }) => {
  return (
    <BackdropContainer $isShowCart={show} onClick={() => handleShow(false)} />
  )
}

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  handleShow: PropTypes.func.isRequired,
}

export default Backdrop
