import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import Center from './Center'
import { NAV_LIST } from '../LIST'
import icon_hamburger from '../img/icon/mobile-hamburger.svg'
import icon_cancel from '../img/icon/mobile-cancel.svg'
import icon_search from '../img/icon/search.svg'
import { SUPPORT } from '../utils'

export default function Navbar() {

  const [active, setActive] = useState(false)

  const toggleHamburger = () => setActive(!active)

  return (
    <div className={`fixed z-20 w-full ${SUPPORT.BackdropFilter ? 'bg-hazy-50' : 'bg-white-980'} ${active ? 'shadow-lg' : 'shadow'}`}>
      <Center>
        <div className="h-12 flex justify-between items-center">

          <div className={`w-8 lg:hidden flex items-center`}>
            <button className={`relative ${active ? 'open' : ''}`} onClick={toggleHamburger}>
              <img src={active ? icon_cancel : icon_hamburger} alt="toggle" className="w-4" />
            </button>
          </div>
          
          <Link to="/" className="block w-16" title="Logo">
            <img src={logo} alt="gaoyouzhi" className="w-16" />
          </Link>

          <div className="hidden lg:flex justify-center items-center flex-grow">
            {NAV_LIST.map(({ name, to }) => (
              <Link
                key={to}
                to={to}
                className="nav-item mx-2 xl:mx-4 font-thin text-sm text-gray-600 hover:text-gray-800 font-kxzd"
              >
                {name}
              </Link>
            ))}
          </div>

          <div className="w-8 lg:w-16">
            <div className="w-full h-8 bg-black-50 rounded-full flex justify-center items-center hover:bg-black-100 transition duration-200 cursor-pointer">
              <img src={icon_search} alt="search" className="w-3 opacity-50" />
            </div>
          </div>

        </div>
      </Center>
      {active && (
        <div className="lg:hidden pt-12 border-t">
          <VerticalNav />
        </div>
      )}
    </div>
  )
}

export function VerticalNav() {
  return (
    <div className="w-full flex justify-around items-start">
      {NAV_LIST.map((item, index) => (
        <Link
          key={index}
          to={item.to}
          className="h-72 flex flex-col justify-center items-start font-kxzd cursor-pointer hover:opacity-75 hover:-translate-y-1 transform transition duration-200"
        >
          <div className="h-1/5 w-full flex justify-center items-center md:items-start">
            <div
              className="w-6 md:w-8 h-6 md:w-8 md:w-10 md:h-10 rounded-full text-white flex justify-center items-center"
              style={{ backgroundColor: 'rgba(0,0,0, .2)' }}
            >
              {`壹貳叁肆`[index]}
            </div>
          </div>
          <div className="h-4/5 flex justify-center">
            <p className="write-vertical text-xl md:text-3xl">{item.name}</p>
            <p className="write-vertical text-gray-500 text-xs md:text-sm">
              {item.period} &nbsp;
              <span className="ml-2 py-1 text-white bg-red-600 font-din">{item.year}</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

