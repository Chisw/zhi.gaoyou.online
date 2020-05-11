import React, { useState } from 'react'
import Layout from '../components/Layout'
import Center from '../components/Center'
import FA from '../components/FA'
import Statistics from '../components/Statistics'
import { LINK_LIST, HISTORY_LIST } from '../utils'
import logo from '../img/logo.png'
import { VerticalNav } from '../components/Navbar'

export default function IndexPage() {

  const [historySlideDown, setHistorySlideDown] = useState(false)

  return (
    <Layout hideNavbar>

      <Center
        className="h-100vh bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(./img/banner.jpg)`, }}
        innerClassName="flex flex-col"
      >
        <div className="h-2/5 flex justify-center items-center">
          <div className="text-center">
            <img src={logo} alt="logo" className="inline-block w-40" />
            <h1 className="mt-2 text-xl text-gray-600 font-kxzd">華夏一郵邑 神州無同類</h1>
            <input className="mt-6 w-80 md:w-128 h-12 px-6 rounded-full bg-white-600 shadow outline-none" placeholder="在高郵志中搜索" />
          </div>
        </div>
        <div className="md:px-40 h-2/5 flex justify-center items-center">
          <VerticalNav />
        </div>
        <div className="h-1/5 flex justify-center items-end text-2xl text-gray-800">
          <FA icon="angle-double-up" className="animation-bounce" />
        </div>
      </Center>

      <Center className="py-12" innerClassName={`${historySlideDown ? 'h-auto' : 'h-100vh overflow-hidden'}`}>
        <h2 className="pb-8 text-center text-4xl font-light">历代沿革</h2>
        {HISTORY_LIST.map(([title, info], index) => (
          <div key={index} className="mb-6 text-center">
            <span className="mb-2 text-base font-light bg-gray-500 text-white">{title}</span>
            <p className="font-kai">{info}</p>
          </div>
        ))}
        {!historySlideDown && (
          <div
            className="absolute right-0 bottom-0 left-0 h-12 flex justify-center items-center bg-white-900 border-t cursor-pointer text-sm text-gray-600 hover:text-gray-800"
            onClick={() => setHistorySlideDown(true)}
          >
            展开
          </div>
        )}
      </Center>

      <Center className="py-12 bg-black-10">
        <h2 className="pb-8 text-center text-4xl font-light">整理统计</h2>
        <Statistics />
      </Center>

      <Center className="py-12">
        <h2 className="pb-8 text-center text-4xl font-light">友情链接</h2>
        <div className="flex flex-wrap justify-center">
          {LINK_LIST.map(({ url, logo }, index) => (
            <a
              key={index}
              className="inline-block p-6 w-1/2 md:w-1/4 xl:w-1/5 hover:bg-black-30"
              href={url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={logo} alt="link" />
            </a>
          ))}
        </div>
      </Center>

    </Layout>
  )
}

