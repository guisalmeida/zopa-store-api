import Backdrop from '../backdrop'

import { SliderContainer } from './styled'

type SliderProps = {
  direction: string
  show: boolean
  title: string
  children: React.ReactNode
  handleShow: (bool: boolean) => void
}

const Slider = ({
  direction,
  show,
  title,
  children,
  handleShow,
}: SliderProps): React.JSX.Element => {
  return (
    <>
      <SliderContainer $show={show} $direction={direction}>
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

export default Slider
