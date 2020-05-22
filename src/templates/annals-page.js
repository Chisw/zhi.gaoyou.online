import React, { useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Sidebar from '../components/Sidebar'
import Tocbot from '../components/Tocbot'
import PrevNext from '../components/PrevNext'
import Center from '../components/Center'
import icon_list from '../img/icon/list.svg'
import border from '../img/border.png'
import Viewer from 'viewerjs'
import 'viewerjs/dist/viewer.css'
import { PY_MAP } from '../LIST'
import { userOption } from '../utils'

const PY_chars = Object.keys(PY_MAP)

export function AnnalsPageTemplate({ title, content, contentComponent, nodes, location }) {
  const PageContent = contentComponent || Content

  const { Z_DJ, Z_YW, Z_PY } = userOption.get()

  const [barOpen, setBarOpen] = useState(false)
  const [checkedList, setCheckedList] = useState([Z_DJ, Z_YW, Z_PY])

  useEffect(() => {
    const pList = document.querySelectorAll(`
      .annals-content > h2,
      .annals-content > h3,
      .annals-content > h4,
      .annals-content > p,
      .annals-content > ul
    `)
    pList && pList.forEach(p => {
      if (!p.innerHTML.includes('</z>')) {
        p.innerHTML = p.innerHTML
          .split('')
          .map(s => {
            if (`，。、·：；？！—（）《》「」■*`.includes(s) || s === ' ') {  // 点校
              return `<z dj>${s}</z>`
            } else if (PY_chars.includes(s)) {  // 注音
              return `${s}<z py>(${PY_MAP[s]})</z>`
            } else {
              return s
            }
          })
          .join('')
      }
    })

    const imgList = document.querySelectorAll('.annals-content img')
    imgList && imgList.forEach(img => {
      img.onclick = e => e.preventDefault()
    })

    new Viewer(
      document.getElementById('viewerjs-box'),
      { toolbar: false, navbar: false, maxZoomRatio: 3, minZoomRatio: .1 }
    )
  }, [])

  const handleOption = (name, checked) => {
    const option = {}
    option[name] = checked
    userOption.set(option)
    const { Z_DJ, Z_YW, Z_PY } = userOption.get()
    setCheckedList([Z_DJ, Z_YW, Z_PY])
  }

  return (
    <>
      <div
        className={`${barOpen ? 'block' : 'hidden'} lg:hidden fixed z-30 inset-0 bg-black-400`}
        onClick={() => setBarOpen(false)}
        role="presentation"
      >
        <div className="absolute top-0 bottom-0 left-0 w-8/12 p-6 overflow-y-auto bg-white shadow-lg">
          <Sidebar nodes={nodes} location={location} />
        </div>
      </div>

      <Center className="pt-12 lg:pt-16" innerClassName="flex py-8">

        <div className="w-2/12 hidden lg:block">
          <div className="fixed">
            <Sidebar nodes={nodes} location={location} />
          </div>
        </div>

        <div
          className={`
            block lg:hidden transition duration-200
            fixed z-20 left-0 bottom-0 mb-4 ml-4 cursor-pointer
            w-10 h-10 rounded-full bg-black-700 hover:bg-black-800 text-white
            flex justify-center items-center shadow shadow-lg
          `}
          onClick={() => setBarOpen(true)}
          role="presentation"
        >
          <img src={icon_list} alt="list" className="w-4" />
        </div>
        
        <div id="viewerjs-box" className="w-full lg:w-8/12">

          <input className="hidden" type="checkbox" id="z-dj" checked={checkedList[0]} onChange={() => handleOption('Z_DJ', !checkedList[0])} />
          <input className="hidden" type="checkbox" id="z-yw" checked={checkedList[1]} onChange={() => handleOption('Z_YW', !checkedList[1])} />
          <input className="hidden" type="checkbox" id="z-py" checked={checkedList[2]} onChange={() => handleOption('Z_PY', !checkedList[2])} />

          <div className="z-container pb-4 flex justify-between items-center text-xs text-gray-700">
            <div className="flex select-none">
              <label className="mr-3 cursor-pointer px-1" htmlFor="z-dj">点校</label>
              <label className="mr-3 cursor-pointer px-1" htmlFor="z-yw">译文</label>
              <label className="mr-3 cursor-pointer px-1" htmlFor="z-py">拼音</label>
            </div>
            <a
              className="text-blue-700"
              href={`https://github.com/Chisw/zhi.gaoyou.online/blob/master/src/pages${location.pathname.slice(0, -1)}.md`}
              target="_blank"
              rel="noreferrer"
            >
              编辑此页
            </a>
          </div>

          <h2
            className="mb-10 p-2 border-2 border-gray-500 text-2xl lg:text-3xl text-center font-kxzd"
            style={{ border: '13px double #eee', borderImage: `url(${border})`, borderImageSlice: 13 }}
          >
            {title}
          </h2>

          <PageContent className="annals-content min-h-640px" content={content} />
          <PrevNext nodes={nodes} location={location} />
        </div>

        <div className="w-2/12 hidden lg:block pl-8">
          <div className="fixed">
            <Tocbot />
          </div>
        </div>

      </Center>
    </>
  )
}

export default function AnnalsPage({ data, location }) {
  const { markdownRemark: post } = data

  return (
    <Layout location={location}>
      <AnnalsPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        nodes={data.allMarkdownRemark.edges}
        location={location}
      />
    </Layout>
  )
}

export const AnnalsPageQuery = graphql`
  query AnnalsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000,
      sort: {order: ASC, fields: frontmatter___order},
      filter: {frontmatter: {templateKey: {eq: "annals-page"}}},
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            vol
            order
          }
        }
      }
    }
  }
`
