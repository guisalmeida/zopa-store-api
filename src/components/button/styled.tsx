import styled from 'styled-components'
import { SpinnerContainer } from '../spinner/styled'

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 1rem;
  background-color: black;
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
      color: black;
    }
  }
`

export const GoogleButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  @media (hover: hover) {
    &:hover {
      background-color: #357ae8;
      border: none;
    }
  }
`

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  @media (hover: hover) {
    &:hover {
      background-color: black;
      color: white;
      border: none;
    }
  }
`
export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`
