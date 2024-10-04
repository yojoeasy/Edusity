import React,{useState,useEffect} from 'react'
import './Navbar.css'
import logo from "../../assets/logo.png"
import { Link } from "react-scroll";
import menu_icon from '../../assets/menu-icon.png'
const Navbar = () => {
  const [sticky,setSticky] = useState(false)
  // useEffect(()=>{
  //   window.addEventListener('scroll',()=>{
  //     window.scrollY > 50 ? setSticky(true) : setSticky(false)
  //   })
  // },[])

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    };
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false)
  return (
    <>
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
        <img src={logo} alt="" className='logo'/>
        <ul className={mobileMenu ? " " : "hide-mobile-menu"}>
          <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
          <li><Link to='program' smooth={true} offset={-260} duration={500}>Program</Link></li>
          <li><Link to='about' smooth={true} offset={-150} duration={500}>About us</Link></li>
          <li><Link to='campus' smooth={true} offset={-260} duration={500}>Campus</Link></li>
          <li><Link to='testimonials' smooth={true} offset={-260} duration={500}>Testimonials</Link></li>
          <li><button className='btn'><Link to='contact'smooth={true} offset={-260} duration={500}>Contact us</Link></button></li>
        </ul>
        <img src={menu_icon} alt=""  className='menu-icon' onClick={()=>{setMobileMenu(!mobileMenu)}}/>
    </nav>
      
    </>
  )
}

export default Navbar
