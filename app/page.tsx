import {HiOutlineSun, HiOutlineLightningBolt} from 'react-icons/hi'
import {BsExclamationTriangle} from 'react-icons/bs'

const HomePage = () => {
  return (
    <div className='homepage_wrapper'>
      <h1 className='homepage_text'>ChatGPT</h1>
      <div className='homepage_features'>
        <div>
          <div className='homepage_features_one'>
            <HiOutlineSun className='icon' />
            <h2>Examples</h2>
          </div>
          <div className='homepage_features_one_text'>
            <p className='infoText'>
              Explain quantum computing in simple terms
            </p>
            <p className='infoText'>
              Got any creative ideas for a 10 year old’s birthday?
            </p>
            <p className='infoText'>
              How do I make an HTTP request in Javascript?
            </p>
          </div>
        </div>
        <div>
          <div className='homepage_features_one'>
            <HiOutlineLightningBolt className='icon' />
            <h2>Capabilities</h2>
          </div>
          <div className='homepage_features_one_text'>
            <p className='infoText'>
              Explain quantum computing in simple terms
            </p>
            <p className='infoText'>
              Got any creative ideas for a 10 year old’s birthday?
            </p>
            <p className='infoText'>
              How do I make an HTTP request in Javascript?
            </p>
          </div>
        </div>
        <div>
          <div className='homepage_features_one'>
            <BsExclamationTriangle className='icon' />
            <h2>Limitations</h2>
          </div>
          <div className='homepage_features_one_text'>
            <p className='infoText'>
              Explain quantum computing in simple terms
            </p>
            <p className='infoText'>
              Got any creative ideas for a 10 year old’s birthday?
            </p>
            <p className='infoText'>
              How do I make an HTTP request in Javascript?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage
