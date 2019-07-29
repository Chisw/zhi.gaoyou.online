import React, { useState } from 'react'
import { Link } from 'gatsby'
import logo from '../img/logo.png'
import QRCode from '../img/QRCode.png'

function Footer() {

  const [QRCodeShow, setQRCodeShow] = useState(false);

  const Modal = () => {
    return (
      <div class="modal is-success" style={{display: QRCodeShow ? 'block' : 'none'}}>
        <div class="modal-background" style={{background: 'rgba(0,0,0, .4)'}}></div>
        <div class="modal-card" style={{top: '20%'}}>
          <section class="modal-card-body">
            <button class="delete" aria-label="close" onClick={()=>{setQRCodeShow(false)}}></button>
            <center>
              <img alt="weixin" src={QRCode} style={{width: '300px'}} />
            </center>
          </section>
        </div>
      </div>
    )
  }

  return (
    <>
      <footer className="footer">
        <div className="content">
          <div className="container">
            <div className="columns">
              <div className="column is-4" style={{alignSelf: 'center', color: '#888'}}>
                <Link style={{color: '#888'}} to="/">首页</Link>
                &emsp;&emsp;
                <a style={{color: '#888'}} href="/admin/" target="_blank" rel="noopener noreferrer">控制台</a>
                &emsp;&emsp;
                <span 
                  style={{color: '#888', cursor: 'pointer'}} target="_blank" rel="noopener noreferrer"
                  onClick={()=>{ setQRCodeShow(true) }}
                >
                    微信打赏
                </span>
              </div>
              <div className="column is-4" style={{textAlign: 'center', alignSelf: 'center'}}>
                <Link to="/">
                  <img alt="logo" src={logo} style={{width: '120px'}} />
                </Link>
              </div>
              <div className="column is-4" style={{fontSize: '12px', textAlign: 'right', color: '#666', alignSelf: 'center'}}>
                <span>Email: i@jisuowei.com</span>
                &emsp;&emsp;
                <span>© Gaoyou.Online</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <Modal />
    </>
  )
}

export default Footer


