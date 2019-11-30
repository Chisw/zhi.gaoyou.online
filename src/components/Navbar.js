import React, { useState } from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.png'
import Center from './Center'

export default function Navbar() {

  const [active, setActive] = useState(false)
  const [navBarActiveClass, setNavBarActiveClass] = useState('')

  const toggleHamburger = () => {
    setActive(!active)
    setNavBarActiveClass(active ? 'active' : '')
  }

  const navList = [
    { name: '高郵州志', url: '/gyzz/' },
    { name: '续增高郵州志', url: '/xzgyzz/' },
    { name: '再续高郵州志', url: '/zxgyzz/' },
    { name: '三续高郵州志', url: '/sxgyzz/' },
    { name: '集志', url: '/jz/' },
  ]

  return (
    <div className="fixed z-10 w-full border-b bg-white">
      <Center>
        <div className="h-12 flex items-center">
          <Link to="/" className="" title="Logo">
            <img src={logo} alt="gaoyouzhi" className="w-20" />
          </Link>
          <div className={`ml-10 flex items-center flex-grow ${navBarActiveClass ? '' : ''}`}>
            {
              navList.map(nav => (
                <Link
                  key={nav.url}
                  to={nav.url}
                  className="mr-4 font-thin text-sm text-gray-600 hover:text-gray-900"
                >
                  {nav.name}
                </Link>
              ))
            }
            <span className="flex justify-end flex-grow">
              <a
                href="https://github.com/chisw/gaoyou-annals"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={github} alt="Github" className="w-6" />
              </a>
            </span>
          </div>
          <div
            className={`${navBarActiveClass ? '' : ''}`}
            onClick={toggleHamburger}
          >
            {/* 三 */}
          </div>
        </div>
      </Center>
    </div>
  )
}

