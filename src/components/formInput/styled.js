import styled, { css } from 'styled-components'

const shrinkLabelStyles = css`
  top: -14px;
  font-size: 0.75rem;
  color: var(--main-color);
`

export const FormLabel = styled.label`
  color: var(--grey);
  font-size: 1rem;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ shrink }) => shrink && shrinkLabelStyles}
`

export const Input = styled.input`
  background: none;
  background-color: var(--light-grey);
  color: var(--grey);
  font-size: 1.8rem;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 1px solid var(--border);
  margin: 25px 0;

  &:focus {
    outline: none;
  }

  &:focus ~ ${FormLabel} {
    ${shrinkLabelStyles};
  }
`

export const FormGroup = styled.div`
  position: relative;
  margin: 3rem 0;

  input[type='password'] {
    letter-spacing: 0.3em;
  }
`
