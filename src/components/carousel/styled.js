import styled from 'styled-components'

export const Carousel = styled.div`
	margin: 3rem 0 0;

	.swiper {
		width: 100%;

		.swiper-slide {
			-webkit-transform: translateZ(0);
			
			img {
				width: 100%;
				height: calc(100vh - 99px);
				object-fit: cover;
			}
		}

		.swiper-button-prev,
		.swiper-button-next {
			/* display: none; */
			color: white;
		}
	}
`