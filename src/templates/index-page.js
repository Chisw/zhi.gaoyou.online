import React, { useState } from 'react'
import Layout from '../components/Layout'
import Center from '../components/Center'
import { VerticalNav } from '../components/Navbar'
import Statistics from '../components/Statistics'
import { LINK_LIST, HISTORY_LIST, PDF_LIST } from '../utils'
import logo from '../img/logo.png'
import arrow from '../img/icon/arrow.svg'
import pdf from '../img/icon/pdf.svg'

export default function IndexPage() {

  const [historySlideDown, setHistorySlideDown] = useState(false)

  return (
    <Layout hideNavbar>

      <Center
        className="h-100vh bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(./img/banner.jpg)`, }}
        innerClassName="flex flex-col"
      >
        <div className="h-2/5 flex justify-center items-center">
          <div className="text-center">
            <img src={logo} alt="logo" className="inline-block w-32" />
            <h1 className="mt-2 text-xl text-gray-600 font-kxzd">華夏一郵邑 神州無同類</h1>
            <input className="mt-6 w-80 md:w-128 h-12 px-6 rounded-full bg-white-600 shadow outline-none" placeholder="在高郵志中搜索" />
          </div>
        </div>
        <div className="md:px-40 h-2/5 flex justify-center items-center">
          <VerticalNav />
        </div>
        <div className="h-1/5 flex justify-center items-end">
          <img src={arrow} alt="arrow" className="animation-bounce w-4" />
        </div>
      </Center>

      <Center
        className="py-12 bg-bottom bg-fixed bg-left-bottom bg-no-repeat"
        style={{ backgroundImage: `url(./img/yizhan.jpg)`, backgroundSize: '64%' }}
        innerClassName={`${historySlideDown ? 'h-auto' : 'h-100vh overflow-hidden'}`}
      >
        <h2 className="pb-8 text-center text-4xl font-light">历代沿革</h2>
        {HISTORY_LIST.map(([title, info], index) => (
          <div key={index} className="mb-8 text-center">
            <span className="mt-2 text-base font-kai border text-gray-900 border-gray-900">{title}</span>
            <p className="mt-4 font-light text-xl" dangerouslySetInnerHTML={{ __html: info }} />
          </div>
        ))}
        {!historySlideDown && (
          <div
            className="absolute right-0 bottom-0 left-0 pb-5 flex justify-center items-center"
          >
            <div
              className="w-1/2 h-12 bg-white-900 border cursor-pointer text-sm text-gray-600 hover:text-gray-800 shadow-lg rounded-full flex justify-center items-center"
              onClick={() => setHistorySlideDown(true)}
              role="presentation"
            >
              展开
            </div>
          </div>
        )}
      </Center>

      <Center className="py-12 bg-gray-100">
        <h2 className="pb-8 text-center text-4xl font-light">资源下载</h2>
        <p className="mb-1 text-xs text-gray-500 text-center">提取码：47ru</p>
        <div className="flex flex-wrap -mx-2">
          {PDF_LIST.map(({ origin, name, size }, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/4 p-2"
            >
              <a
                href="https://pan.baidu.com/s/1u4y576B5-GeSWnDtQxIJ0Q"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full p-4 bg-white rounded-md shadow hover:shadow-lg transition duration-200 flex"
              >
                <div>
                  <img src={pdf} alt="pdf" className="w-12" />
                </div>
                <div className="ml-2">
                  <p className="text-sm">{name}.pdf</p>
                  <p className="mt-1 text-xs text-gray-500">{size}&emsp;来源：{origin}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </Center>

      <Center className="py-12">
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

