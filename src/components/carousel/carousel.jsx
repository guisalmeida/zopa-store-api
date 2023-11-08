import { Autoplay, EffectFade } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

import * as styles from './styled'

export const Carousel = () => {
  const photos = [
    './images/carousel1.JPG',
    './images/carousel2.JPG',
    './images/carousel3.JPG',
  ]

  return (
    <styles.Carousel>
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
    </styles.Carousel>
  )
}
