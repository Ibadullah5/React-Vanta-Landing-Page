/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import './Solutions.css'
import { solutionsData } from '../../data/data'
import { solutions, arrowRight_1, arrowLeft } from '../../assets'
import NavBarLink from '../../component/NavbarLink/NavbarLink'

const Solutions = () => {
  return (
    <div className='solutions section-padding'>

      <div className='solutions__upperpart'>
        <div className='frameworks__title'>
          <p>Solutions</p>
          <h1 className='main-heading' style={{ fontWeight: '400', fontSize: '50px' }}>We scale with you
            <span className='main-fancyheading' style={{ fontSize: '58px' }}> in-<br />at every stage </span>
          </h1>
        </div>
      </div>

      <div className='solutions__lowerpart'>
        <div className='solutions__lowerpart-cards'>
          {
            solutionsData.map((item, index) => (
              <Card
                key={item.heading}
                heading={item.heading}
                text={item.text}
                number={index}
              />
            ))
          }
        </div>
        <div className='solutions__rightside-imgwrapper'>
          <img src={solutions} alt='solutions' />
        </div>

      </div>
    </div >
  )
}

const Card = ({ heading, text, number }) => (
  <div className='solutions__card'>
    {
      number === 1 && <img src={arrowLeft} className='card__arrowleft' />
    }
    {
      number === 2 && <img src={arrowRight_1} className='card__arrowright' />
    }
    <h3>{heading}</h3>
    <p className='card-paragraph'>{text}</p>
    <NavBarLink text='Explore' />
    <div className='card__line' />
  </div>
)

export default Solutions