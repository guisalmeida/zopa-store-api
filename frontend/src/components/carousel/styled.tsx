import styled from 'styled-components'

export const CarouselContainer = styled.div`
  margin: 3rem 0 0;

  .swiper {
    width: 100%;

    .swiper-slide {
      transform: translateZ(0);
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
