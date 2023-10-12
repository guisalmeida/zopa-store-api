import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({
   
  imageUrl }) => `url(${imageUrl})`};
`

export const DirectoryItemBodyContainer = styled.div`
  height: 90px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
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

export const DirectoryItemContainer = styled(Link)`
  min-width: 30%;
  height: 400px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 30px 15px;
  overflow: hidden;

  &:hover {
    cursor: pointer;

    & ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    & ${DirectoryItemBodyContainer} {
      opacity: 0.9;
    }
  }

  &:first-child {
    margin-right: 30px;
  }

  &:last-child {
    margin-left: 30px;
  }
`

