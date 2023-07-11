/* eslint-disable no-unused-vars */
import './NavBarLink.css'
import { arrowRight, arrowRightWhite } from '../../assets'

// eslint-disable-next-line react/prop-types
const NavbarLink = ({ text, color = 'white' }) => {
  return (
    <div className='navbarlink'>
      <p style={color == 'white' ? { color: 'rgb(172, 85, 255)' } : { color: '#fff' }}>{text}</p>
      <img src={color == 'white' ? arrowRight : arrowRightWhite} alt='arrow-right' />
    </div >
  )
}

export default NavbarLink