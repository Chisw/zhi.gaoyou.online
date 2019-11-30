import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import QRCode from '../img/QRCode.png'
import Center from '../components/Center'

function Footer() {

  const [QRCodeShow, setQRCodeShow] = useState(false);

  const Modal = () => {
    return (
      <div className={`fixed z-20 top-0 right-0 bottom-0 left-0 flex justify-center items-center ${QRCodeShow ? '' : 'hidden'}`} style={{ background: 'rgba(0,0,0, .4)' }}>
        <div className="inline-block relative bg-white">
          <span className="absolute top-0 right-0 w-8 h-8 text-center cursor-pointer" onClick={()=>{setQRCodeShow(false)}}>&times;</span>
          <center>
            <img alt="weixin" src={QRCode} className="w-64 rounded-lg" />
          </center>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="py-8 border-t bg-white">
        <Center className="flex items-center text-gray-500 text-sm">
          <div className="w-1/4">
            <Link to="/">首页</Link>
            <span
              className="ml-4 cursor-pointer"
              onClick={()=>{ setQRCodeShow(true) }}
            >
              微信打赏
            </span>
          </div>
          <div className="w-1/2 flex justify-center">
            <Link to="/">
              <img alt="logo" src={logo} style={{width: '120px'}} />
            </Link>
          </div>
          <div className="w-1/4 text-right">
            <span>Email: i@jisuowei.com</span>&emsp;<span>©gaoyou.online</span>
          </div>
        </Center>
      </div>
      <Modal />
    </>
  )
}

export default Footer


