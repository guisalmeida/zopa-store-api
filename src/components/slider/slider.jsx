import PropTypes from 'prop-types'
import Backdrop from '../backdrop'

import { SliderContainer } from './styled'

const Slider = ({ show, title, children, handleShow }) => {
  return (
    <>
      <SliderContainer $show={show}>
        <header className="slider__header">
          <button className="slider__back" onClick={() => handleShow(false)}>
            &#10005;
          </button>
          <h3 className="slider__title">{title}</h3>
        </header>
        <div className="slider__content">{children}</div>
      </SliderContainer>
      <Backdrop show={show} handleShow={handleShow} />
    </>
  )
}

Slider.propTypes = {
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  handleShow: PropTypes.func.isRequired,
}

export default Slider
