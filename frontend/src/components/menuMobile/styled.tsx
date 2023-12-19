import styled from 'styled-components'
import media from 'styled-media-query'

type MenuContainerProps = {
  $show: boolean
}

export const MenuContainer = styled.nav<MenuContainerProps>`
  width: 100%;
  height: 3rem;
  background: white;
  margin: 0;
  border-bottom: 1px solid var(--border);

  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  right: 0;

  transform: translateY(0);
  transition: transform 0.3s ease-out;

  z-index: 2;

  ${props =>
    props.$show &&
    `
      transform: translateY(100%);
    `}

  ${media.greaterThan('small')`
    display: none;
  `}

  ul {
    display: flex;
    align-items: center;

    li {
      margin: 0.5rem;
    }

    li:not(:last-child)::after {
      content: '|';
      margin-left: 1rem;
      color: var(--main-color);
    }

    a,
    button {
      text-decoration: none;
      color: var(--main-color);
      text-transform: capitalize;
      font-size: 1rem;

      &.selected {
        text-decoration: underline;
      }

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`
