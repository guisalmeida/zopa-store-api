import styled from 'styled-components'

type SliderContainerProps = {
  $show: boolean
  $direction: string
}

export const SliderContainer = styled.div<SliderContainerProps>`
  background: var(--light-grey);
  height: 100%;
  width: 100%;
  max-width: 412px;
  position: fixed;
  top: 0;
  z-index: 99;
  transition: transform 0.3s ease-out;
  overflow: auto;

  ${props =>
    props.$direction === 'right' && `transform: translateX(100%); right: 0;`}

  ${props =>
    props.$direction === 'left' && `transform: translateX(-100%); left: 0;`};

  ${props => props.$show && `transform: translateX(0);`}

  .slider__header {
    position: relative;
    background: var(--main-color);
    color: var(--white);
    width: 100%;
    height: 3rem;
    box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.1);
    padding: 0 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;

    .slider__back {
      position: absolute;
      top: calc(50% - 9px);
      padding: 0;
      margin: 0;
      font-size: 1.8rem;
      height: 20px;
      display: flex;
      align-items: center;
      color: white;
      ${props => props.$direction === 'right' && `left: 1rem;`}
      ${props => props.$direction === 'left' && `right: 1rem;`};

      svg {
        width: 18px;
        height: 18px;
      }
    }

    .slider__title {
      font-size: 1rem;
      font-weight: 700;
      margin: 0;
      text-align: center;
    }
  }

  .slider__content {
    position: relative;
    display: flex;
    flex-direction: column;
    height: calc(100% - 3rem);
    align-items: center;

    .button__container {
      position: absolute;
      bottom: 1.6rem;
      width: calc(100% - 3.2rem);
    }

    .checkout__button {
      position: absolute;
      bottom: 1rem;
      width: calc(100% - 2rem);
      margin: 0 1rem;
    }
  }
`
