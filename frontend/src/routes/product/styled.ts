import styled from 'styled-components'
import media from 'styled-media-query'

export const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--break-large);
  margin: 6rem auto;

  .product__image img {
    width: 100%;
    display: block;
  }

  .product__content {
    width: 100%;
    padding: 0 0 0 1rem;

    .product__name {
      text-align: left;
      font-size: 2rem;
      margin: 0 0 1rem;
      font-weight: bold;
    }

    .product__pricing {
      display: flex;

      .product__price {
        font-size: 1rem;
        margin: 0 0 0.8rem;
        font-weight: 700;

        &--old {
          color: var(--grey);
          text-decoration: line-through;
          margin-right: 1rem;
        }

        &--installments {
          color: var(--grey);
          margin-left: 1rem;
        }
      }
    }

    .product__sizes {
      display: block;

      .product__description {
        color: var(--grey);
        font-size: 1rem;
        margin: 1rem 0;

        &--warning {
          color: var(--red);
        }
      }

      .product__btn-group {
        display: flex;
        align-items: center;

        .product__filter {
          font-size: 1rem;
          font-weight: 700;
          padding: 0.2rem;
          border: 0.1rem solid var(--grey);
          margin-right: 0.8rem;
          background: transparent;
          outline: none;
          border-radius: 0.5rem;
          width: 3.6rem;
          height: 3.6rem;
          line-height: 1;
          text-align: center;
          transition: all ease 0.3s;
          color: var(--dark);

          @media (hover: hover) {
            &:hover {
              background: var(--grey);
              color: white;
            }
          }

          &--selected {
            background: var(--dark);
            color: var(--white);
            border: none;
          }
        }
      }
    }

    .product__actions {
      position: static;
      padding: 1rem 0;
      width: 100%;
      z-index: 9;

      .product__add-to-cart {
        font-size: 1rem;
        text-align: center;
        line-height: 1;
        padding: 1rem;
        border-radius: 0.5rem;
        background: var(--dark);
        color: var(--white);
        display: inline-block;
        width: 200px;
        box-shadow: 0 0.2rem 2rem 0 rgba(0, 0, 0, 0.1);
        transition: all ease 0.3s;

        @media (hover: hover) {
          &:hover {
            background: var(--grey);
          }
        }
      }
    }
  }

  ${media.lessThan('large')`
        max-width: var(--break-medium);
    `}

  ${media.lessThan('medium')`
      max-width: var(--break-small);
      flex-direction: column;
      margin: 3rem auto;

      .product__content {
          width: 100%;
          padding: 1rem;
          
          
          .product__name {
              margin-top: 0;
          }
  
          .product__actions {
  
              .product__add-to-cart {
                  width: 100%;
              }
          }
      }

      .product__image img:not(:first-child) {
          display: none;
      }
  `}
`
