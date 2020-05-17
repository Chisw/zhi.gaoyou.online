import React, { useState } from 'react'
import Layout from '../components/Layout'
import Center from '../components/Center'
import { VerticalNav } from '../components/Navbar'
import Statistics from '../components/Statistics'
import { LINK_LIST, HISTORY_LIST, PDF_LIST, ABOUT_LIST } from '../LIST'
import logo from '../img/logo.png'
import arrow from '../img/icon/arrow.svg'
import pdf from '../img/icon/pdf.svg'
import banner from '../img/banner.jpg'
import yizhan from '../img/yizhan.jpg'
import { SUPPORT } from '../utils'

export default function IndexPage() {

  const [historySlideDown, setHistorySlideDown] = useState(false)

  return (
    <Layout hideNavbar>

      <Center
        className="h-100vh min-h-480px md:min-h-640px bg-cover bg-center bg-fixed bg-no-repeat"
        style={{ backgroundImage: `url(${banner})` }}
        innerClassName="flex flex-col"
      >
        <div className="absolute z-10 bottom-0 right-0 left-0 py-3 text-xs md:text-sm text-gray-500 flex justify-center">
          <a className="mx-1 md:mx-4" href="#about">关于本站</a>
          <a className="mx-1 md:mx-4" href="#pdf">资源共享</a>
          <a className="mx-1 md:mx-4" href="#history">历代建置</a>
          <a className="mx-1 md:mx-4" href="#statistics">整理统计</a>
          <a className="mx-1 md:mx-4" href="#links">友情链接</a>
        </div>
        <div className="h-2/5 flex justify-center items-center">
          <div className="text-center">
            <img src={logo} alt="logo" className="inline-block w-24 md:w-32" />
            <h1 className="mt-1 md:mt-2 text-sm md:text-xl text-gray-600 font-kxzd">華夏一郵邑 神州無同類</h1>
            <input
              readOnly
              className="mt-3 md:mt-6 w-72 md:w-128 h-10 md:h-12 px-4 md:px-6 rounded-full bg-white-700 shadow-lg outline-none text-sm"
              placeholder="在「高郵志」中搜索"
            />
          </div>
        </div>
        <div className="md:px-40 h-2/5 pt-12 md:pt-0 flex justify-center items-center">
          <VerticalNav />
        </div>
        <div className="h-1/5 flex justify-center items-center opacity-25">
          <img src={arrow} alt="arrow" className="animation-bounce w-6" />
        </div>
      </Center>

      <Center className="py-12 md:py-24">
        <h2 id="about" className="pb-8 text-center text-2xl md:text-4xl font-light">关于本站</h2>
        <div className="flex flex-wrap -mx-2">
          {ABOUT_LIST.map(({ icon, name, info, url }, index) => (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-2 py-1 md:py-2"
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full p-3 md:p-4 border rounded-md hover:bg-gray-100 transition duration-200 hover:border-blue-500"
              >
                <div className="flex justify-center items-center">
                  <img src={icon} alt="icon" className="h-4" />
                  <span className="ml-2 font-din font-thin">{name}</span>
                </div>
                <div className="text-gray-500 text-center text-xs">{info}</div>
              </a>
            </div>
          ))}
        </div>
      </Center>

      <Center className="py-12 md:py-24">
        <h2 id="pdf" className="pb-8 text-center text-2xl md:text-4xl font-light">资源共享</h2>
        <p className="mb-1 text-xs text-gray-500 text-center">提取码：47ru</p>
        <div className="flex flex-wrap -mx-2">
          {PDF_LIST.map(({ origin, name, size }, index) => (
            <div
              key={index}
              className="w-1/2 md:w-1/3 xl:w-1/4 p-1 md:p-2"
            >
              <a
                href="https://pan.baidu.com/s/1u4y576B5-GeSWnDtQxIJ0Q"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full h-full p-2 md:p-4 bg-black-30 rounded-md shadow hover:shadow-lg transition duration-200 flex items-start"
              >
                <div>
                  <img src={pdf} alt="pdf" className="w-12" />
                </div>
                <div className="ml-2">
                  <p className="text-xs">{name}.pdf</p>
                  <p className="text-xs text-gray-500">来源：{origin}</p>
                  <p className="text-xs text-gray-500 font-din">{size}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </Center>

      <Center
        className="py-12 md:py-24 bg-bottom bg-fixed bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${yizhan})` }}
        innerClassName={`${historySlideDown ? 'h-auto' : 'h-100vh overflow-hidden'}`}
      >
        <h2 id="history" className="pb-8 text-center text-2xl md:text-4xl font-light">历代建置</h2>
        {HISTORY_LIST.map(([title, info], index) => (
          <div key={index} className="mb-8 text-center">
            <span className="mt-2 text-xs md:text-base font-kai text-gray-600">「 {title} 」</span>
            <p className="mt-2 md:mt-4 font-light text-base md:text-xl" dangerouslySetInnerHTML={{ __html: info }} />
          </div>
        ))}
        {!historySlideDown && (
          <div className="absolute right-0 bottom-0 left-0 flex justify-center items-center">
            <div
              className={`w-32 h-10 ${SUPPORT.BackdropFilter ? 'bg-deep-25' : 'bg-black-400'} cursor-pointer text-xs text-white rounded-full flex justify-center items-center transition duration-200`}
              onClick={() => setHistorySlideDown(true)}
              role="presentation"
            >
              展开
            </div>
          </div>
        )}
      </Center>

      <Center className="py-12 md:py-24">
        <h2 id="statistics" className="pb-8 text-center text-2xl md:text-4xl font-light font-din">整理统计</h2>
        <Statistics />
      </Center>

      <Center className="py-12 md:py-24">
        <h2 id="links" className="pb-8 text-center text-2xl md:text-4xl font-light">友情链接</h2>
        <div className="flex flex-wrap justify-center">
          {LINK_LIST.map(({ url, logo }, index) => (
            <a
              key={index}
              className="inline-block p-4 w-1/3 md:p-8 md:w-1/4 xl:p-10 xl:w-1/5 hover:bg-black-30 rounded-md"
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

