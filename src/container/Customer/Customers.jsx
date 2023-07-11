import './Customers.css'
import NavBarLink from '../../component/NavbarLink/NavbarLink'
import { honors, g2, ceo, curve } from '../../assets';
import { Parallax } from 'react-scroll-parallax';
import { useParallax } from 'react-scroll-parallax';

const Customers = () => {

  const { ref } = useParallax({
    translateX: [-10, 20]
  });



  return (
    <Parallax >
      <div className='customers'>
        <img className='customers__curveimg' src={curve} alt='curve' ref={ref} />

        <div className='customers__upperpart'>
          <div className='customers__upperpart-leftside'>
            <div className='customers__title'>
              <p>Customers</p>
              <h1 className='main-heading' style={{ fontWeight: '400', fontSize: '50px', color: '#fff' }}>Learn why we,re rated the leading security compliance solution by over
                <span className='main-fancyheading' style={{ fontSize: '58px', color: 'rgb(36, 6, 66)' }}> 5,000 customers. </span>
              </h1>
            </div>
            <NavBarLink text='See our customers' color='gray' />
          </div>
          <div className='customers__upperpart-rightside'>
            <div className='customers__upperpart-rightside-g2'>
              <img src={g2} />
              <h2>G2.com Leader, year after year</h2>
            </div>
            <p>Vanta is more than compliance. We’re the
              leading trust management platform that gives
              you full visibility into your risks and helps
              you fix issues in a way that builds trust.</p>
            <div className='customers__upperpart-rightside-imgwrapper'>
              <img src={honors} />
            </div>

          </div>
        </div>

        <div className='customers__lowerpart'>
          <div className='customers__lowerpart-imgwrapper'>
            <img src={ceo} />
          </div>
          <div className='customers__lowerpart-text'>
            <h1>
              “Vanta guided us through a process that we had
              no experience with before. We didn’t even have to
              think about the audit process - it became
              straightforward,
              <span>and we got SOC Type II complaints in just a few weeks”</span>
            </h1>
            <div>
              <p style={{ opacity: '1' }}>Shane Curran, CEO & Founder</p>
              <p>Evervault</p>
            </div>
          </div>
        </div>

      </div>
    </Parallax>
  )
};
export default Customers