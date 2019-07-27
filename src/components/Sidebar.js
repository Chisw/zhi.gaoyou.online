import React from 'react'
import { Link } from 'gatsby'

function Sidebar({location, nodes}) {

    const url = location.pathname
    const currentAnnalsName = url.split('/')[1] || 'gyzz'
    const allAnnalsOutline = {
        "gyzz": [
            { label: '高郵州志总目', value: 'vol-00' },
            { label: '舆地志卷之一', value: 'vol-01' },
            { label: '河渠志卷之二', value: 'vol-02' },
            { label: '民赋志卷之三', value: 'vol-03' },
            { label: '食货志卷之四', value: 'vol-04' },
            { label: '学校志卷之五', value: 'vol-05' },
            { label: '典礼志卷之六', value: 'vol-06' },
            { label: '军政志卷之七', value: 'vol-07' },
            { label: '秩官志卷之八', value: 'vol-08' },
            { label: '选举志卷之九', value: 'vol-09' },
            { label: '人物志卷之十', value: 'vol-10' },
            { label: '艺文志卷之十一', value: 'vol-11' },
            { label: '杂类志卷之十二', value: 'vol-12' }
        ]
    }
    const outlineList = allAnnalsOutline[currentAnnalsName]

    const groupVols = [];
    const groups = outlineList.map( item => {
        groupVols.push(item.value)
        return {
            group: item.label,
            items: []
        }
    })

    nodes.forEach( node => {
        const index = groupVols.indexOf(node.node.frontmatter.vol);
        if ( index >= 0) {
            groups[index].items.push({
                title: node.node.frontmatter.title,
                link: node.node.fields.slug
            })
        }
    })

    // console.log(groups)

    return (
        <nav>
            {groups.map((group, i) => (
                <div key={i} className="sidebar-outline">
                    {group.items.some(item => (item.link === decodeURIComponent(location.pathname))) 
                        ? (
                            <>
                                <h4>
                                    { group.items[0] && (
                                         group.items[0].link 
                                            ? <SidebarLink link={group.items[0].link} title={group.group}/>
                                            : group.group
                                        )
                                    }
                                </h4>
                                <SidebarList
                                    key={i}
                                    items={group.items}
                                    location={location}
                                />
                            </>
                        )
                        : 
                            <h4>
                            { 
                                group.items[0] && (
                                    group.items[0].link 
                                        ? <SidebarLink link={group.items[0].link} title={group.group}/> 
                                        : group.group
                                )
                            }
                            </h4>}
                </div>
            ))}
        </nav>
    )
}

export default Sidebar


const SidebarLink = ({ link, title, linkClasses }) => {
    if (link) {
        if (link.match(/^\s?http(s?)/gi)) {
            // use anchor links for external links
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

const SidebarList = ({ items, location }) => {
    return (
        <ul className="sidebar-outline-items">
            {items.map((item, j) => (               
                <li key={j}>
                    <SidebarLink
                        link={item.link}
                        title={item.title}
                        linkClasses={(item.link === decodeURIComponent(location.pathname) ? 'active' : '')}
                    />
                </li>
            ))}
        </ul>
    )
}