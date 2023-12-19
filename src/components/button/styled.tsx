import styled from 'styled-components'
import { SpinnerContainer } from '../spinner/styled'

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px 0 35px;
  font-size: 1rem;
  background-color: var(--black);
  color: white;
  text-transform: uppercase;
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  transition: all ease 0.3s;

  @media (hover: hover) {
    &:hover {
      background-color: var(--grey);
      color: var(--black);
    }
  }
`

export const HighlightButton = styled(BaseButton)`
  background-color: var(--highlight);
  color: white;

  @media (hover: hover) {
    &:hover {
      border: none;
    }
  }
`

export const WarnButton = styled(BaseButton)`
  background-color: var(--white);
  color: var(--red);
  border: 1px solid var(--red);

  @media (hover: hover) {
    &:hover {
      background-color: var(--red);
      color: var(--white);
    }
  }
`
export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`
