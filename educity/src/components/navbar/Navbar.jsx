import "./Navbar.css"

import logo from "../../assets/logo.jpg"
import { useEffect, useState } from "react"

export default function Navbar() {

  const[sticky,setSticky]=useState(false);

 useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY >50 ? setSticky(true) :setSticky(false);
      })
 })
  return (
    <nav>
        <div className={`container ${sticky ? 'dark-nav':''}`}>
        <div className="navbar">
        <img src={logo} alt="" width="80px" />
        <h2>Educity</h2>
        </div>
        
        <ul>
            <li>Home</li>
            <li>Program</li>
            <li>About us</li>
            <li>Campus</li>
            <li>Testimonials</li>
            <li><button className="btn">Contact us</button></li>
        </ul>

        </div>

    </nav>
  )
}
