import React from 'react'
import { Link } from 'gatsby'

export default function Sidebar({location, nodes}) {

  // const url = location.pathname
  // const currentAnnalsName = url.split('/')[1] || 'gyzz'
  const currentAnnalsName = 'gyzz'
  const allAnnalsOutline = {
    "gyzz": [
      { label: '高郵州志總目', value: 'vol-00', icon: 'list' },
      { label: '輿地志卷之一', value: 'vol-01', icon: 'layer' },
      { label: '河渠志卷之二', value: 'vol-02', icon: 'river' },
      { label: '民賦志卷之三', value: 'vol-03', icon: 'money' },
      { label: '食貨志卷之四', value: 'vol-04', icon: 'bowl' },
      { label: '學校志卷之五', value: 'vol-05', icon: 'school' },
      { label: '典禮志卷之六', value: 'vol-06', icon: 'pray' },
      { label: '軍政志卷之七', value: 'vol-07', icon: 'sword' },
      { label: '秩官志卷之八', value: 'vol-08', icon: 'chair' },
      { label: '選舉志卷之九', value: 'vol-09', icon: 'column' },
      { label: '人物志卷之十', value: 'vol-10', icon: 'people' },
      { label: '藝文志卷之十一', value: 'vol-11', icon: 'book' },
      { label: '雜類志卷之十二', value: 'vol-12', icon: 'taiji' }
    ]
  }
  const outlineList = allAnnalsOutline[currentAnnalsName]

  const groupVols = [];
  const groups = outlineList.map( item => {
    groupVols.push(item.value)
    return {
      group: item.label,
      icon: item.icon,
      items: []
    }
  })

  nodes.forEach( node => {
    const volIndex = groupVols.indexOf(node.node.frontmatter.vol);
    if ( volIndex >= 0) {
      groups[volIndex].items.push({
        title: node.node.frontmatter.title,
        link: node.node.fields.slug
      })
    }
  })

  // console.log(groups)

  const SidebarLink = ({ link, title, linkClasses }) => {
    if (link) {
      if (link.match(/^\s?http(s?)/gi)) {
        return <a href={link} target="_blank" rel="noopener noreferrer">{title}</a>
      } else {
        return <Link to={link} className={linkClasses}>{title}</Link>
      }
    } else {
      return (
        <>{this.props.title}</>
      )
    }
  }

  const arr = (location.href || '').split('#')[0].split('/').reverse()
  const index = arr[0] ? 0 : 1
  const currentPageLink = decodeURIComponent(`/${arr[index+1]}/${arr[index]}/`)

  return (
    <nav>
      {
        groups.map((group, i) => (
          <div key={i} className="sidebar-outline">
            <h4 className={`annals-icon icon-${group.icon}`}>
              { group.items[0] && (
                  <SidebarLink link={group.items[0].link} title={group.group}/>
                )
              }
            </h4>
            {  // sub
              group.items.some(item => (item.link === currentPageLink )) && (
                <ul className="sidebar-outline-items" key={i}>
                  {group.items.map((item, j) => (
                    <li key={j}>
                      <SidebarLink
                        link={item.link}
                        title={item.title}
                        linkClasses={(item.link === currentPageLink ? 'active' : '')}
                      />
                    </li>
                  ))}
                </ul>
              )
            }
          </div>
        ))
      }
    </nav>
  )
}
