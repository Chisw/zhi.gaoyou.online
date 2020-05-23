import React from 'react'
import Layout from '../components/Layout'
import Center from '../components/Center'

const NotFoundPage = () => (
  <Layout>
    <Center className="py-20">
      <div className="pt-40 pb-48 text-center">
        <h1 className="mb-12 text-6xl text-gray-700 font-kxzd">
          <span className="inline-block -mx-2 w-24 h-24 border-4 border-double rounded-full">肆</span>
          <span className="inline-block -mx-2 w-24 h-24 border-4 border-double rounded-full">零</span>
          <span className="inline-block -mx-2 w-24 h-24 border-4 border-double rounded-full">肆</span>
        </h1>
        <p className="text-gray-500 text-xl font-din">404 NOT FOUND</p>
        <p className="text-gray-500 text-sm">该页面不存在，或正在建设中</p>
      </div>
    </Center>
  </Layout>
)

export default NotFoundPage
