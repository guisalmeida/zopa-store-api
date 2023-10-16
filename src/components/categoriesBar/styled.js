import styled from "styled-components";
import media from 'styled-media-query'

export const ProductsCategories = styled.nav`
    width: 100%;
    height: 3rem;
    background: white;
    margin: 3rem 0 0;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    align-items: center;
    justify-content: center;
    
    ul {
        display: flex;
        width: 100%;
        max-width: var(--break-large);

        ${media.lessThan('large')`
            max-width: var(--break-medium);
        `}

        ${media.lessThan('medium')`
            padding: 0 1rem;
        `}

        a {
            text-decoration: none;
            color:var(--main-color);
            text-transform: capitalize;
            
            &.selected {
                text-decoration: underline;
            }
            
            @media (hover: hover){
                &:hover {
                    text-decoration: underline;
                }
            }
        }

        li {
            margin-right: 1rem;
        }

        li:not(:last-child)::after {
            content: "|";
            margin-left: 1rem;
            color: var(--main-color);
        }
    }
`
