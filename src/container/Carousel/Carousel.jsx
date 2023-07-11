import './Carousel.css'
import {
  autoDesk, gusto, quora, shortcut, gem, ditch, llama, grass
} from '../../assets'

const Carousel = () => {
  return (
    <div className='carousel'>
      <img className='ditch-image' src={ditch} alt='ditch' />
      <img className='llama-image' src={llama} alt='llama' />
      <img className='grass-image' src={grass} alt='grass' />
      <p className='carousel-text'>
        Thousands of growing companies <span>trust Vanta to secure their business.</span>
      </p>
      <div className='carousel-conveyor'>
        <div className='carousel-conveyor-img-wrapper'>
          <img src={autoDesk} alt='auto-desk' />
        </div>
        <div className='carousel-conveyor-img-wrapper'>
          <img src={gusto} alt='gusto' />
        </div>
        <div className='carousel-conveyor-img-wrapper'>
          <img src={quora} alt='quora' />
        </div>
        <div className='carousel-conveyor-img-wrapper'>
          <img src={shortcut} alt='shortcut' />
        </div>
        <div className='carousel-conveyor-img-wrapper'>
          <img src={gem} alt='gem' />
        </div>
      </div>
    </div>
  )
}

export default Carousel;