import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import QRCode from '../img/QRCode.png'
import Center from '../components/Center'
import github from '../img/icon/github.svg'

function Footer() {

  const [QRCodeShow, setQRCodeShow] = useState(false);

  const Modal = () => {
    return (
      <div className={`fixed z-20 top-0 right-0 bottom-0 left-0 flex justify-center items-center ${QRCodeShow ? '' : 'hidden'}`} style={{ background: 'rgba(0,0,0, .4)' }}>
        <div className="inline-block p-8 relative bg-white rounded-lg">
          <button className="absolute top-0 right-0 w-8 h-8 text-center cursor-pointer" onClick={() => setQRCodeShow(false)}>&times;</button>
          <div className="text-center">
            <img alt="weixin" src={QRCode} className="w-64" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Center
        className="py-8 border-t"
        innerClassName="flex items-center text-gray-500 text-sm"
      >
        <div className="w-1/4 text-gray-700">
          <a href="https://gaoyou.online" target="_blank" rel="noopener noreferrer">高郵攬影</a>
          <button
            className="ml-4 cursor-pointer"
            onClick={() => setQRCodeShow(true)}
          >
            微信打賞
          </button>
        </div>
        <div className="w-1/2 flex justify-center">
          <Link to="/">
            <img alt="logo" src={logo} className="w-24" />
          </Link>
        </div>
        <div className="w-1/4 font-thin flex justify-end items-center">
          <span>© gaoyou.online</span>&emsp;
          <span>
            <a
              href="https://github.com/Chisw/zhi.gaoyou.online"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="Github" className="w-6 h-6" />
            </a>
          </span>
        </div>
      </Center>
      <Modal />
    </>
  )
}

export default Footer


