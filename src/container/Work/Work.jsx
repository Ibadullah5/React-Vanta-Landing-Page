import './Work.css'
import {
  work1, work2, work3
} from '../../assets'

const Work = () => {
  return (
    <div className='work section-padding'>

      <div className='work__title'>
        <p>How does Vanta work?</p>
        <h1 className='main-heading' style={{ fontWeight: '400', fontSize: '55px' }}>Vanta
          <span className='main-fancyheading' style={{ fontSize: '58px' }}> automates </span>
          up to 90% of the
          work for security and privacy frameworks</h1>
      </div>

      <div className='work__row'>
        <div className='work__text' data-aos='fade-up' data-aos-once={true}>
          <h3>Real-time <span>monitoring</span></h3>
          <p>Know the state of your security posture
            right now with hourly tests. Receive
            alerts when something looks off and
            use our two-way task-tracker integrations
            to stay on top of fixes.</p>
        </div>
        <div className='work__imgwrapper' data-aos='fade-down'>
          <img src={work1} alt='work1' />
        </div>
      </div>

      <div className='work__row'>
        <div className='work__imgwrapper' data-aos='fade-down'>
          <img src={work2} alt='work2' />
        </div>
        <div className='work__text' data-aos='fade-up' data-aos-once={true}>
          <h3>Holistic risk <span>visibility</span></h3>
          <p>Gain a single view across the key risk
            surfaces in your business: your employees,
            assets, vendors, and more. Use our pre-built
            integrations or the Vanta API to make sure the
            picture is complete. Because you can’t secure what
            you can’t see.</p>
        </div>
      </div>

      <div className='work__row'>
        <div className='work__text' data-aos='fade-up' data-aos-once={true}>
          <h3>Efficient <span>audits</span></h3>
          <p>Save time going back-and-forth with a
            seamless audit process. We make auditor selection
            a breeze and enable them to complete your audit
            completely within Vanta.</p>
        </div>
        <div className='work__imgwrapper' data-aos='fade-down'>
          <img src={work3} alt='work3' />
        </div>
      </div>

    </div>
  )
}

export default Work