import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Experience, Hero, Navbar, Skills, Works} from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: "#161617" }} className='relative z-0'>
        <div style={{ backgroundImage: "url('/src/assets/herob.png')" }} className='bg-cover bg-center bg-no-repeat'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Skills />
        <Works />
        <div className='relative z-0'>
          <Contact />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
