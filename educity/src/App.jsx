import About from "./components/About/About"
import Campus from "./components/Campus/Campus"
import Contact from "./components/Contact/Contact"
import Testimonials from "./components/Testimonials/Testimonials"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Programs from "./components/programs/Programs"
import Title from "./components/title/Title"

function App() {
  return(
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Title subTitle='Our Program' title='What we offer'/>
      <Programs></Programs>
      <About></About>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus></Campus>
      <Title subTitle='TESTIMONIALS' title='WHAT STUDENT SAYS'/>
      <Testimonials></Testimonials>
      <Title subTitle='Contact US' title='Get in Touch'/>
      <Contact></Contact>
    </>
  )
}

export default App
