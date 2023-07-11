import './Hero.css'
import { arrowRight, arrowRightWhite } from '../../assets'
import { verified, hero } from '../../assets'

const Hero = () => {
  return (
    <div className="hero section-padding">

      <div className="hero__text">
        <h1 className="main-heading" style={{ fontWeight: '400', fontSize: '55px' }}>
          Your security<br /> and compliance
        </h1>
        <div className='hero__verified'>
          <h1 className="main-fancyheading" style={{ fontSize: '58px' }}>
            verified
          </h1>
          <img src={verified} alt='verified' />
        </div>
        <p className="main-paragraph">
          To grow your business, you need to prove
          customers can trust you with their data.
          <span>
            We’re here to help you get compliant, manage risk, and show off your security
          </span>
          - so you can focus on building and selling.
        </p>
        <div className='hero__demo'>
          <button className="main-button">
            Requset a Demo
            <img src={arrowRightWhite} alt='arrow-right' />
          </button>
          <div className='navbarlink'>
            <p>Take a Tour</p>
            <img src={arrowRight} alt='arrow-right' />
          </div>
        </div>
      </div>

      <div className="hero__image">
        <img src={hero} alt='hero'
          data-aos="fade-down"
          data-aos-anchor-placement="centre-bottom" data-aos-duration="2000" />
      </div>
    </div>
  )
}

export default Hero