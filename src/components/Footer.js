import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="content">
          <div className="container">
            <div className="columns">
              <div className="column is-8">
                <Link style={{color: '#888'}} to="/">首页</Link>
                <a style={{color: '#888', marginLeft: '32px'}} href="/admin/" target="_blank" rel="noopener noreferrer">控制台</a>
              </div>
              <div className="column is-4" style={{fontSize: '14px', textAlign: 'right', color: '#666'}}>
                Email: i@jisuowei.com
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer
