import React from "react"
import { Link } from "react-router-dom"
import { headerLogo } from "../assets/images"
import { navLinks } from "../constants"
import { hamburger } from "../assets/icons"

const Nav = () => {
  return (
    <header className="padding-l padding-r py-8 w-full fixed z-10" >
      <nav className="flex justify-between items-center max-container ">
        <a href="/">
          <img src={headerLogo} alt="logo" />
        </a>
        <ul className=" flex-1 flex justify-center items-center gap-16 max-lg:hidden">
           {navLinks.map(elem => 
            <li key={elem.href}>
              <a className='font-montserrat leading-normal text-lg text-slate-gray' href={elem.href}>{elem.label}</a>
            </li>
            )}
        </ul>
        <Link to="/allProducts" className="font-montserrat text-lg text-slate-gray">Explore</Link>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  )
}

export default Nav