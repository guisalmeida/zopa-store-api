import styled from 'styled-components'
import { CloseCircle } from '@styled-icons/remix-fill/CloseCircle'

export const ListItemContainer = styled.div`
  padding: 1.6rem;
  border-bottom: 1px dashed var(--border);
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  position: relative;
`

export const ListItemFigure = styled.figure`
  margin: 0;
  flex: 1;

  img {
    width: 100%;
    height: auto;
  }
`

export const ListItemInfo = styled.div`
  width: 50%;
  padding-left: 1rem;
  padding-right: 1rem;
  text-decoration: none;

  .list__title {
    margin: 0;
    flex: 2;
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
    text-decoration: none;
    color: var(--dark);
  }

  .list__size {
    font-size: 1rem;
    color: var(--grey);
    margin: 0 0 0.5rem;
  }
`

export const ListItemPrices = styled.div`
  flex: 1;
  text-align: right;

  .list__price {
    font-size: 1rem;
    font-weight: 700;
    margin: 0 0 0.5rem;
    color: var(--dark);

    &--old {
      color: var(--grey);
      text-decoration: line-through;
    }

    &--installments {
      color: var(--grey);
      font-size: 0.75rem;
      font-weight: 400;
    }
  }
`

export const RemoveIcon = styled(CloseCircle)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  color: var(--grey);
  background-color: var(--white);
  border-radius: 1rem;
  width: 1.6rem;
  height: 1.6rem;
`
