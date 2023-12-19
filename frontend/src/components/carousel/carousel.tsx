import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

import { CarouselContainer } from './styled'

const Carousel = (): React.JSX.Element => {
  const photos = [
    './images/carousel1.JPG',
    './images/carousel2.JPG',
    './images/carousel3.JPG',
  ]

  return (
    <CarouselContainer>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect={'fade'}
        speed={800}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
      >
        {photos.map((photo, index) => (
          <SwiperSlide key={index}>
            <img src={photo} alt="image" />
          </SwiperSlide>
        ))}
      </Swiper>
    </CarouselContainer>
  )
}

export default Carousel
