import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import QRCode from '../img/QRCode.jpg'
import Center from '../components/Center'
import wave from '../img/wave.png'

function Footer() {

  const [QRCodeShow, setQRCodeShow] = useState(false);

  const Modal = () => {
    return (
      <div
        className={`fixed z-20 top-0 right-0 bottom-0 left-0 flex justify-center items-center text-gray-500 ${QRCodeShow ? '' : 'hidden'} bg-black-200`}
        onClick={() => setQRCodeShow(false)}
        role="presentation"
      >
        <div className="inline-block py-4 relative bg-white rounded-lg shadow-lg">
          <button className="absolute top-0 right-0 w-8 h-8 text-center cursor-pointer font-din text-lg" onClick={() => setQRCodeShow(false)}>&times;</button>
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
        className="relative z-0 py-8 border-t"
        style={{ backgroundImage: `url(${wave})`, backgroundSize: '40px' }}
        innerClassName="flex flex-wrap items-center text-sm"
      >
        <div className="mb-6 w-full text-center lg:hidden">
          <Link to="/">
            <img alt="logo" src={logo} className="inline-block w-24" />
          </Link>
        </div>
        <div className="w-full lg:w-1/4 py-1 text-center lg:text-left text-gray-700">
          <a
            href="https://gaoyou.online"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-900"
          >
            高郵攬影
          </a>
          <span
            className="ml-4 cursor-pointer hover:text-gray-900"
            onClick={() => setQRCodeShow(true)}
            role="presentation"
          >
            微信赞赏
          </span>
        </div>
        <div className="w-1/2 text-center hidden lg:block">
          <Link to="/">
            <img alt="logo" src={logo} className="inline-block w-24" />
          </Link>
        </div>
        <div className="w-full lg:w-1/4 py-1 text-center lg:text-right font-light text-gray-600">
          © gaoyou.online
        </div>
      </Center>
      <Modal />
    </>
  )
}

export default Footer


