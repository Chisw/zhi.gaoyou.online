import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import Center from './Center'
import { NAV_LIST } from '../LIST'

export default function Navbar() {

  const [active, setActive] = useState(false)

  const toggleHamburger = () => setActive(!active)

  return (
    <div className="fixed z-20 w-full border-b bg-white">
      <Center>
        <div className="gyz-nav h-12 flex items-center">
          <Link to="/" className="" title="Logo">
            <img src={logo} alt="gaoyouzhi" className="w-20" />
          </Link>
          <div className={`ml-10 flex items-center flex-grow ${active ? 'open' : ''}`}>
            {NAV_LIST.map(({ name, to }) => (
              <Link
                key={to}
                to={to}
                className="nav-item mr-4 font-thin text-base text-gray-600 hover:text-gray-900 font-kxzd"
              >
                {name}
              </Link>
            ))}
          </div>
          <div className={`hidden flex-grow flex justify-end items-center`}>
            <button className={`relative ${active ? 'open' : ''}`} onClick={toggleHamburger}>
              <div></div>
              <div></div>
              <div></div>
            </button>
          </div>
        </div>
      </Center>
      {/* <Center>
        <VerticalNav />
      </Center> */}
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
          className="h-72 flex flex-col justify-center items-start font-kxzd cursor-pointer hover:opacity-75 hover:scale-105 transform transition duration-200"
        >
          <div className="h-1/5 w-full flex justify-center items-start">
            <div className="w-8 h-8 md:w-10 md:h-10 rounded-full text-white flex justify-center items-center" style={{ backgroundColor: 'rgba(0,0,0,.2)' }}>
              {`壹貳叁肆`[index]}
            </div>
          </div>
          <div className="h-4/5 flex justify-center">
            <p className="write-vertical text-2xl md:text-3xl">{item.name}</p>
            <p className="write-vertical text-gray-500 text-xs md:text-sm">
              {item.period} &nbsp;
              <span className="ml-2 text-white bg-red-600">{item.year}</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  )
}

