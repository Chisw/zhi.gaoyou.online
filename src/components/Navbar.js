import React, { useState } from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.png'
import Center from './Center'

export default function Navbar() {

  const [active, setActive] = useState(false)

  const toggleHamburger = () => {
    setActive(!active)
  }

  const navList = [
    { name: '高郵州志', url: '/gyzz/' },
    { name: '續增高郵州志', url: '/xzgyzz/' },
    { name: '再續高郵州志', url: '/zxgyzz/' },
    { name: '三續高郵州志', url: '/sxgyzz/' },
    { name: '集志', url: '/jz/' },
  ]

  return (
    <div className="fixed z-20 w-full border-b bg-white">
      <Center mobilePadding>
        <div className="gyz-nav h-12 flex items-center">
          <Link to="/" className="" title="Logo">
            <img src={logo} alt="gaoyouzhi" className="w-20" />
          </Link>
          <div className={`nav-wrapper ml-10 flex items-center flex-grow ${active ? 'open' : ''}`}>
            {
              navList.map(nav => (
                <Link
                  key={nav.url}
                  to={nav.url}
                  className="nav-item mr-4 font-thin text-base text-gray-600 hover:text-gray-900"
                >
                  {nav.name}
                </Link>
              ))
            }
            <span className="nav-item github flex justify-end flex-grow">
              <a
                href="https://github.com/chisw/gaoyou-annals"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="Github" className="w-6 h-6" />
              </a>
            </span>
          </div>
          <div className={`nav-menu hidden flex-grow flex justify-end items-center`}>
            <button className={`menu-icon relative ${active ? 'open' : ''}`} onClick={toggleHamburger}>
              <div></div>
              <div></div>
              <div></div>
            </button>
          </div>
        </div>
      </Center>
    </div>
  )
}

