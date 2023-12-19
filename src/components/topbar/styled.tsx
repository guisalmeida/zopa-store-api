import styled from 'styled-components'
import media from 'styled-media-query'
import { Menu } from '@styled-icons/zondicons/Menu'
import { UserCircle } from '@styled-icons/boxicons-regular/UserCircle'

export const TopbarContainer = styled.header`
  width: 100%;
  height: 3rem;
  background: var(--white);
  border-bottom: 1px solid var(--border);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;

  ${media.lessThan('medium')`
        padding: 1rem;
    `}

  .container {
    width: 100%;
    max-width: var(--break-large);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;

    ${media.lessThan('large')`
      max-width: var(--break-medium);
    `}
  }

  .logo {
    width: 100px;
    height: auto;
    margin-top: 10px;
  }

  .topbar__icons {
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: end;

    button {
      border: none;
      background: transparent;
      padding: 0;
      outline: none;
      margin-left: 1.5rem;
    }

    .topbar__cart {
      position: relative;
    }

    .topbar__link {
      text-decoration: none;
      color: var(--black);
      cursor: pointer;
      font-size: 1rem;

      ${media.lessThan('small')`
        display: none;
      `}

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .topbar__links {
    width: 30%;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: start;

    .topbar__menu-mobile {
      width: 20px;
      height: 20px;
      padding: 0;

      ${media.greaterThan('small')`
        display: none;
      `}
    }

    .topbar__search {
      height: 20px;
      width: 20px;
    }

    .topbar__link {
      text-decoration: none;
      color: var(--black);
      cursor: pointer;
      margin-right: 1.5rem;

      ${media.lessThan('small')`
        display: none;
      `}

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`

export const MenuMobileIcon = styled(Menu)`
  color: var(--dark);
`

export const UserIcon = styled(UserCircle)`
  color: var(--dark);
  width: 1.6rem;
  height: 1.6rem;
`
