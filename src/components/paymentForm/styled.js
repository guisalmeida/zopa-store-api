import styled from 'styled-components'
import Button from '../button'
import media from 'styled-media-query'

export const PaymentFormContainer = styled.div`
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: var(--break-large);

  ${media.lessThan('medium')`
    max-width: var(--break-small);
    padding: 0 1rem;
  `}
`

export const FormContainer = styled.form`
  height: auto;
  width: 100%;
  margin-bottom: 6rem;
`

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`

export const FormTitle = styled.h2`
  font-size: 1rem;
  font-weight: bolder;
  margin: 2rem 0 1rem;
`
