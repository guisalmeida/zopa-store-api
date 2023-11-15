import styled from 'styled-components'
import media from 'styled-media-query'

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 3rem;

  width: 100%;
  max-width: var(--break-large);
  margin: 3rem auto 6rem;

  ${media.lessThan('large')`
        max-width: var(--break-medium);
    `}

  ${media.lessThan('medium')`
        margin: 3rem 2rem 6rem;
        grid-column-gap: 2rem;
        grid-row-gap: 2rem;
        width: calc(100% - 4rem);
    `}
`
