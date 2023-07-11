import './WhyVanta.css'
import {
  ditch2, streamline, accelarateGrowth, mitigateRisk, buildTrust, arrowRightWhite, llama2
} from '../../assets'

const WhyVanta = () => {
  return (
    <div className='whyvanta'>

      <img className='whyvanta__ditchimg' src={ditch2} alt='ditch' />
      <div className='whyvanta__title'>
        <p>How does Vanta work?</p>
        <h1 className='main-heading' style={{ color: '#fff' }}>Build Trust, <br />
          <span className='main-fancyheading'> Build Business </span>
        </h1>
      </div>

      <div className='whyvanta__twoparts'>

        <div className='whyvanta__twoparts-largepart'>
          <div className='whyvanta__text'>
            <h3>Accelerate <span>Growth</span></h3>
            <p>Vanta automates 25% more evidence
              than any other solution. By getting
              compliant faster, you can close deals
              sooner.</p>
          </div>
          <div className='whyvanta__twoparts-imgwrapper'>
            <img src={accelarateGrowth} alt='accelarate-growth' />
          </div>
        </div>

        <div className='whyvanta__twoparts-smallpart'>
          <div className='whyvanta__text'>
            <h3>Streamline <span>Compliance</span></h3>
            <p>Vanta helps you easily maintain compliance,
              freeing up your engineering and security teams
              from ongoing program management.
            </p>
          </div>
          <div className='whyvanta__twoparts-imgwrapper'>
            <img src={streamline} alt='streamline-compliance' />
          </div>
        </div>

      </div>

      <div className='whyvanta__twoparts'>

        <div className='whyvanta__twoparts-smallpart'>
          <div className='whyvanta__text'>
            <h3>Mitigate <span>Risk</span></h3>
            <p>Vanta goes beyond check-the-box solutions by
              helping you manage your top risk surfaces, like
              employee app access and vendor security.
            </p>
          </div>
          <div className='whyvanta__twoparts-imgwrapper'>
            <img src={mitigateRisk} alt='streamline-compliance' />
          </div>
        </div>

        <div className='whyvanta__twoparts-largepart'>
          <div className='whyvanta__text'>
            <h3>Build <span>Trust</span></h3>
            <p>Vanta helps you improve and prove
              your security so you can win more deals,
              shorten sales cycles, and deepen relationships.
            </p>
          </div>
          <div className='whyvanta__twoparts-imgwrapper'>
            <img src={buildTrust} alt='accelarate-growth' />
          </div>
        </div>

      </div>

      <div className='whyvanta__compliance'>
        <h1 className='main-heading' style={{ color: 'rgb(36, 6, 66)' }}>
          We talk compliance <br />
          <span className='main-fancyheading' style={{ color: '#fff' }}>
            ‍in your language</span>
        </h1>
        <button className="main-button">
          Requset a Demo
          <img src={arrowRightWhite} alt='arrow-right' />
        </button>
        <img className='whyvanta__llamaimg' src={llama2} alt='llama' />
      </div>

    </div>
  )
}

export default WhyVanta