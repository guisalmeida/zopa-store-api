import styled from "styled-components";

export const SearchContainer = styled.div`
	box-shadow: 0 0.2rem 1rem 0 rgba(0, 0, 0, 0.1);
	background-color: var(--light-grey);
	padding: 1rem 1.6rem;

	.search__input {
		width: 100%;
		padding: 1rem;
		height: 36px;
		outline: none;
		box-shadow: 0 0 1px 0 rgba(0, 0, 0, 0.2);
		color: var(--dark);
		background: white;
		border-radius: 4px;
		font-size: 1.4rem;
		font-weight: 600;
		border: 1px;
	}
`

export const SearchContent = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	padding: 1.6rem;

	.search__list {
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		overflow: auto;

		.search__empty {
			width: 100%;
			text-align: center;
			align-self: center;
			font-size: 1.6rem;
			color: var(--light-grey);
			position: absolute;
			top: 50%;
			left: 0;
			margin: 0 auto;
			-webkit-transform: translate3d(0, -50%, 0);
			transform: translate3d(0, -50%, 0);
			
			.search__link {
				text-decoration: none;
			}
		}
	}

`


