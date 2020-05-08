import React from 'react'
import Layout from '../components/Layout'
import Center from '../components/Center'

const NotFoundPage = () => (
  <Layout>
    <div className="pt-20 pb-8">
      <Center>
        <h1 style={{fontSize: '60px'}}>404 NOT FOUND <span role="img" aria-label="ghost">👻</span></h1>
        <p>访问路径出错，或者该页面正在建设中..</p>
        <p>The access path is wrong, or the page is under construction..</p>
      </Center>
    </div>
  </Layout>
)

export default NotFoundPage
