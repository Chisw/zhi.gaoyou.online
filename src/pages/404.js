import React from 'react'
import Layout from '../components/Layout'
import Center from '../components/Center'

const NotFoundPage = () => (
  <Layout>
    <Center className="py-20">
      <div className="pt-40 pb-48 text-center">
        <h1 className="mb-4 text-5xl text-gray-700 font-din">404 NOT FOUND <span role="img" aria-label="ghost">👻</span></h1>
        <p className="text-gray-500">访问路径出错，或者该页面正在建设</p>
        <p className="text-gray-500">The access path is wrong, or the page is under construction</p>
      </div>
    </Center>
  </Layout>
)

export default NotFoundPage
