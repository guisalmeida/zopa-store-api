import styled from 'styled-components'
import media from 'styled-media-query'

export const CheckoutContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6rem auto 0;
  width: 100%;
  max-width: var(--break-large);

  ${media.lessThan('large')`
    max-width: var(--break-medium);
  `}

  .checkout__total {
    margin-top: 30px;
    margin-left: auto;
    font-size: 2rem;
    font-weight: bolder;

    ${media.lessThan('medium')`
      margin: 1rem auto;
    `}
  }
`
