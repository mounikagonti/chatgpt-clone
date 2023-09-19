import React, {useRef, useState} from 'react'
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
// import 'swiper/css/navigation'

// import required modules
import {Autoplay, Pagination} from 'swiper/modules'

const SwiperPage = () => {
  const typeWritingText = [
    {
      id: 1,
      headingText: 'Help me to debug',
      normalText: 'hello i am mounika gonti map the text below',
    },
    {
      id: 2,
      headingText: 'Help me to debug',
      normalText: 'hello i am mounika gonti map the text below',
    },
    {
      id: 3,
      headingText: 'Help me to debug',
      normalText: 'hello i am mounika gonti map the text below',
    },
    {
      id: 4,
      headingText: 'Help me to debug',
      normalText: 'hello i am mounika gonti map the text below',
    },
    {
      id: 5,
      headingText: 'Help me to debug',
      normalText: 'hello i am mounika gonti map the text below',
    },
    {
      id: 6,
      headingText: 'Help me to debug',
      normalText: 'hello i am mounika gonti map the text below',
    },
  ]

  return (
    <>
      <Swiper
        style={{
          // @ts-ignore
          '--swiper-pagination-color': '#00002E',
          '--swiper-pagination-bullet-inactive-color': '#00002E',
        }}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2700,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination]}
        className='mySwiper'
      >
        <SwiperSlide>
          <div className='swiperSlide_heading'>Help me to debug</div>
          <div className='swiperSlide_normal_text swiperSlide_normal_text_one'>
            hello i am mounika gonti and this is the chatGPT clone here!
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperSlide_heading'>Summarize this article</div>
          <div className='swiperSlide_normal_text swiperSlide_normal_text_two'>
            hello i am mounika gonti and this is the chatGPT clone here!
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperSlide_heading'>Write a thankyou note</div>
          <div className='swiperSlide_normal_text swiperSlide_normal_text_three'>
            hello i am mounika gonti this is the typewriting text here!
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperSlide_heading'>Write a text</div>
          <div className='swiperSlide_normal_text swiperSlide_normal_text_four'>
            hello i am mounika gonti this is the typewriting text here!
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperSlide_heading'>Recomand a dish</div>
          <div className='swiperSlide_normal_text swiperSlide_normal_text_five'>
            hello i am mounika gonti this is the typewriting text here!
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperSlide_heading'>Help me pick</div>
          <div className='swiperSlide_normal_text swiperSlide_normal_text_six'>
            hello i am mounika gonti this is the typewriting text here!
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperSlide_heading'>Improve my post</div>
          <div className='swiperSlide_normal_text swiperSlide_normal_text_seven'>
            hello i am mounika gonti this is the typewriting text here!
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperSlide_heading'>Give me ideas</div>
          <div className='swiperSlide_normal_text swiperSlide_normal_text_eight'>
            hello i am mounika gonti this is the typewriting text here!
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperSlide_heading'>Suggest fun activities</div>
          <div className='swiperSlide_normal_text swiperSlide_normal_text_nine'>
            hello i am mounika gonti and this is the chatGPT clone here!
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='swiperSlide_heading'>Draft an email</div>
          <div className='swiperSlide_normal_text swiperSlide_normal_text_ten'>
            hello i am mounika gonti and this is the chatGPT clone here!
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  )
}
export default SwiperPage
