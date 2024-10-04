import React,{useState} from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from "../src/components/Hero/Hero";
import Program from './components/Programs/Program';
import Title from './components/Title/Title';
import About from './components/About/About';
import Campus from './components/Campus/Campus';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';


const App = () => {

  const [play, setPlay] = useState(false)

  return (
    <>
    <Navbar/>
    <Hero/>  
    <div className="container">
    <Title subtitle="Our PROGRAM" title="What We Offer"/>
    <Program/>
    <About setPlay={setPlay}/>
    <Title subtitle="GALLERY" title="Campus Photo"/>
    <Campus/>
    <Title subtitle="Testimonials" title="What Student Says"/>
    <Testimonials/>
    <Title subtitle="Contact us" title="Get In Touch"/>
    <Contact/>
    <Footer/>
    </div>
    <VideoPlayer play={play} setPlay={setPlay}/>
    
    </>
  )
}

export default App
