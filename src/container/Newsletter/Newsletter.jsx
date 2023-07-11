import './Newsletter.css'
import { arrowRightWhite, newsletterCurve, windmill, roundArrow, scootie } from '../../assets'

const Newsletter = () => {
  return (
    <div className='newsletter'>

      <div className='newsletter__upperpart'>
        <div className='newsletter__upperpart-text'>
          <h1 className='main-heading' style={{ fontWeight: '400', fontSize: '50px' }}>Get complaint and<br />
            <span className='main-fancyheading' style={{ fontSize: '58px' }}> built trust fast</span>
          </h1>
          <button className="main-button">
            Requset a Demo
            <img src={arrowRightWhite} alt='arrow-right' />
          </button>
        </div>
        <div className='newsletter__upperpart-windmillimgwrapper' data-aos='fade-up' data-aos-once={true}>
          <img className='windmill-img' src={windmill} />
        </div>
        <div className='newsletter__upperpart-scootieimgwrapper' data-aos='fade-right' data-aos-once={true}>
          <img className='scootie-img' src={scootie} />
        </div>
        <div className='newsletter__upperpart-curveimgwrapper'>
          <img className='curve-img' src={newsletterCurve} />
        </div>
      </div>

      <div className='newsletter__lowerpart'>
        <div>
          <h2 className='main-paragraph' style={{ color: '#fff' }}>Stay up to date with everything with Vanta</h2>
          <img src={roundArrow} />
        </div>
        <div>
          <input type='email' placeholder='Email*' />
          <button>
            Subscribe
          </button>
        </div>
      </div>

    </div>
  )
}

export default Newsletter