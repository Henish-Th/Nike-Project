import React from "react"
import { Link } from "react-router-dom"
import { headerLogo } from "../assets/images"
import { navLinks } from "../constants"
import { hamburger } from "../assets/icons"

const Nav = () => {
  return (
    <header className="padding-l padding-r py-8 w-full bg-gray-100" >
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img src={headerLogo} alt="logo" />
        </a>
        <ul className=" flex-1 flex justify-center items-center gap-16 max-lg:hidden">
           {navLinks.map(elem => 
            <li key={elem.href}>
              <Link to={elem.href} className='font-montserrat leading-normal text-lg text-slate-gray'>{elem.label}</Link>
            </li>
            )}
        </ul>
        <Link to="/signin" className="font-montserrat text-lg text-slate-gray">Sign in / Explore</Link>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav