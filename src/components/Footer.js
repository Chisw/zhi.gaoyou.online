import React from 'react'
import { Link } from 'gatsby'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div className="columns">
              <div className="column is-8">
                <Link style={{color: '#fff'}} to="/">首页</Link>
                <a style={{color: '#fff', marginLeft: '20px'}} href="/admin/" target="_blank" rel="noopener noreferrer">控制台</a>
              </div>
              <div className="column is-4">
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
