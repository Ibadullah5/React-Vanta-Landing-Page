import './App.css'
import Navbar from './container/Navbar/Navbar'
import Hero from './container/Hero/Hero'
import Carousel from './container/Carousel/Carousel'
import Work from './container/Work/Work'
import Explore from './container/Explore/Explore'
import WhyVanta from './container/WhyVanta/WhyVanta'
import Frameworks from './container/Frameworks/Frameworks'
import Solutions from './container/Solutions/Solutions'
import { ParallaxProvider } from 'react-scroll-parallax';
import Customers from './container/Customer/Customers'
import Newsletter from './container/Newsletter/Newsletter'

function App() {
  return (
    <ParallaxProvider>
      <Navbar />
      <Hero />
      <Carousel />
      <Work />
      <Explore />
      <WhyVanta />
      <Frameworks />
      <Solutions />
      <Customers />
      <Newsletter />
    </ParallaxProvider>
  )
}

export default App
