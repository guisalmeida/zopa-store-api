import styled from 'styled-components'
import { Link } from 'react-router-dom'

// TS custom props:
// https://styled-components.com/docs/api#using-custom-props
type BackgroundImageProps = {
  $imageUrl: string
}

export const BackgroundImage = styled.div<BackgroundImageProps>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ $imageUrl }) => `url(${$imageUrl})`};
`

export const CategoryItemBodyContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--black);
  background-color: white;
  opacity: 1;
  position: absolute;
  color: #4a4a4a;

  h2 {
    font-weight: bold;
    margin: 0 6px 10px;
    font-size: 22px;
  }

  p {
    font-weight: lighter;
    font-size: 16px;
  }
`

export const CategoryItemContainer = styled(Link)`
  min-width: 30%;
  height: 400px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid var(--black);
  margin: 0 30px 15px;
  overflow: hidden;

  @media (hover: hover) {
    &:hover {
      cursor: pointer;

      & ${BackgroundImage} {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }

      & ${CategoryItemBodyContainer} {
        opacity: 0.9;
      }
    }
  }

  &:first-child {
    margin-right: 30px;
  }

  &:last-child {
    margin-left: 30px;
  }
`
