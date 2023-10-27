import styled from 'styled-components'
import Button from '../button'
import media from 'styled-media-query'

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: var(--break-large);

  ${media.lessThan('medium')`
    max-width: var(--break-small);
  `}
`

export const FormContainer = styled.form`
  height: 100px;
  width: 100%;
`

export const PaymentButton = styled(Button)`
  margin-left: auto;
  margin-top: 30px;
`
