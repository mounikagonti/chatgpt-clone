'use client'
import {signIn} from 'next-auth/react'
import Image from 'next/image'
import SwiperPage from '../swiperPage/SwiperPage'

const LoginPage = () => {
  return (
    <div className='container'>
      <div className='banner__wrapper'>
        <div className='banner__left'>
          ChatGPT
          <span className='font__circle'>●</span>
          <div className='banner__left__text'>
            <SwiperPage />
          </div>
        </div>

        <div className='banner__right'>
          <div className='banner__right__chatGPT'>
            ChatGPT
            <span className='font__circle'>●</span>
          </div>
          <div className='banner__right__top'>
            <div className='banner__right__text'>Get Started</div>
            <div className='banner__right__btn'>
              <button
                className='banner__right__login__btn'
                onClick={() => signIn('google')}
              >
                Log in
              </button>
              <button
                className='banner__right__sign_in__btn'
                onClick={() => signIn('google')}
              >
                Sign up
              </button>
            </div>
          </div>
          <div className='banner__right_bottom'>
            <div className='chat_gpt__icon'>
              <Image
                src='https://www.edigitalagency.com.au/wp-content/uploads/chatgpt-logo-white-on-transparent-background-png.png'
                width={60}
                height={60}
                alt='logo'
                style={{backgroundColor: '$sixth_brand'}}
              />
              <div className='open__ai'>OpenAI</div>
            </div>
            <div className='chat_gpt__terms_wrapper'>
              <a className='terms' href=''>
                Terms of use
              </a>
              <div className='or'>|</div>
              <a className='terms' href=''>
                Privacy policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
