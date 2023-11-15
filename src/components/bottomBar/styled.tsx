import styled from 'styled-components'

export const Footer = styled.footer`
  border-top: 1px solid #e6e6e6;
  height: 3rem;
  width: 100%;
  font-size: 0.75rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background: #ffffff;
  z-index: 1;
  display: flex;
  align-items: center;

  .footer__content {
    display: flex;
    justify-content: center;
    align-items: center;

    &.container {
      margin: 0 auto;
    }

    a {
      cursor: pointer;
      text-decoration: none;
      color: var(--main-color);

      @media (hover: hover) {
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .logo {
    width: 70px;
    height: auto;
    margin-top: 10px;
  }
`
