import styled from 'styled-components'
import media from 'styled-media-query'

export const AuthenticationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 6rem auto 6rem;
  width: 100%;
  max-width: var(--break-large);
`

export const SignContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: var(--break-small);

  ${media.lessThan('medium')`
        width: 100%;
        padding:1rem;
    `}

  h2 {
    margin: 10px 0;
  }

  form {
    margin-top: 2rem;
  }

  a {
    color: var(--dark);
  }
`

export const ButtonsContaner = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0 0;

  button[type='submit'] {
    margin-bottom: 1rem;
  }

  button {
    font-size: 1rem;
    text-align: center;
    line-height: 1;
    padding: 1rem;
    border-radius: 0.5rem;
    display: inline-block;
    width: 100%;
    box-shadow: 0 0.2rem 2rem 0 rgba(0, 0, 0, 0.1);
    transition: all ease 0.3s;
    border: none;

    @media (hover: hover) {
      &:hover {
        background: var(--grey);
      }
    }
  }
`
