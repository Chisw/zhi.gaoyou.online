import React from 'react'
import { Helmet } from 'react-helmet'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import useSiteMetadata from './SiteMetadata'
import favicon from '../img/favicon.png'
import '../css/index.css'

export default function Layout({ children, hideNavbar, location }) {

  const { title, description } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <html lang="zh-CN" />
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0" />
        <meta name="description" content={description} />
        <link rel="icon" type="image/png" href={favicon} sizes="32x32" />
        <meta property="og:title" content={title} />
      </Helmet>
      {!hideNavbar && <Navbar location={location} />}
      <div>{children}</div>
      <Footer />
    </>
  )
}
