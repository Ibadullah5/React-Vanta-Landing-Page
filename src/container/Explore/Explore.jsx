/* eslint-disable react/prop-types */
import './Explore.css'
import './Card.css'
import { data } from '../../data/data'
import NavBarLink from '../../component/NavbarLink/NavbarLink'

const Explore = () => {
  return (
    <div className='explore section-padding' data-aos='fade-up' data-aos-once={true}>

      <div className='explore__text'>
        <p>Our products</p>
        <h1 className='main-heading' style={{ fontWeight: '400', fontSize: '55px', maxWidth: '500px' }}>
          Explore the <span className='main-fancyheading' style={{ fontSize: '58px' }}>Vanta platform</span>
        </h1>
      </div>

      <div className='explore__cards'>
        {data.map((item) => (
          <Card image={item.image} heading={item.heading} text={item.text} key={item.heading} />
        ))}
      </div>


    </div>
  )
}

const Card = ({ image, heading, text }) => (
  <div className='card'>
    <img src={image} alt='card-image' />
    <h3>{heading}</h3>
    <p className='card-paragraph'>{text}</p>
    <NavBarLink text='Explore' />
  </div>
)

export default Explore