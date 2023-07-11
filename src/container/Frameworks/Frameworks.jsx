/* eslint-disable react/prop-types */
import './Frameworks.css'
import './FrameworkCard.css'
import NavbarLink from '../../component/NavbarLink/NavbarLink'
import { frameworkData } from '../../data/data'

const Frameworks = () => {
  return (
    <div className='frameworks section-padding' data-aos='fade-up' data-aos-once={true}>
      <div className='frameworks__title'>
        <p>Frameworks</p>
        <h1 className='main-heading' style={{ fontWeight: '400', fontSize: '50px' }}>Get the most
          <span className='main-fancyheading' style={{ fontSize: '58px' }}> in-<br />demand </span>
          frameworks in <br />weeks, not months
        </h1>
      </div>

      <div className='frameworks__cards'>
        {
          frameworkData.map((item) => (
            <FrameworkCard
              key={item.heading}
              image={item.image}
              heading={item.heading}
              text={item.text}
            />
          ))
        }
      </div>
      <NavbarLink text='See All Frameworks' />

    </div>
  )
}

const FrameworkCard = ({ image, heading, text }) => (
  <div className='card'>
    <img src={image} alt='card-image' />
    <h3>{heading}</h3>
    <p className='card-paragraph'>{text}</p>
    <NavbarLink text='Explore' />
  </div>
)

export default Frameworks