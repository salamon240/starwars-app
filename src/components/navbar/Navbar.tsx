import React, { useState } from 'react'
import './navbar.css'
import logo from './../../images/pngwing.com (6) (2).png'
import { IoIosMenu } from "react-icons/io";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from 'react-router-dom';


function Navbar() {
    const[nav ,setNav]=useState(false)
  return (
    <div className='navbar'>
        <img src={logo} alt="starwars-logo"  />
        <nav>
            <ul className={nav? "menu nvactiv":"menu"}>
               <li onClick={()=>setNav(!nav)}> <Link to="/">Search Page</Link></li>

            </ul>
        </nav>
        <div onClick={()=>setNav(!nav) } className="menuBtn">
        {nav ?<AiOutlineClose size={25}/>  :<IoIosMenu color='gold' size={25}/>}
          
        
        </div>
    </div>
  )
}

export default Navbar