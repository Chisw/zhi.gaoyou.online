import React, { useState, createRef, useEffect } from 'react'
import { Link } from 'gatsby'
import {
  InstantSearch,
  Index,
  Hits,
  Highlight,
  Snippet,
  connectStateResults,
  connectSearchBox,
} from 'react-instantsearch-dom'
import algoliasearch from 'algoliasearch/lite'

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? children : <div className="text-center">{`没有找到与 '${state.query}' 相关的记录`}</div>
)

const Stats = connectStateResults(
  ({ searchResults: res }) =>
    res && res.nbHits > 0 && <div className="mb-2 text-center">{`${res.nbHits} 条记录`}</div>
)

const Input = connectSearchBox(({ refine, ...rest }) => (
  <input
    id="gaoyouzhi-search"
    className="px-4 w-full h-12 border-2 rounded-full text-sm outline-none"
    type="text"
    placeholder="在「高邮志」中搜索"
    aria-label="搜索"
    onChange={e => refine(e.target.value)}
    {...rest}
  />
))

const PageHit = () => ({ hit }) => {
  // console.log(hit)
  return (
    <Link to={hit.fields.slug}>
      <div className="px-4 py-2 hover:bg-gray-200 rounded cursor-pointer">
        <h4>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h4>
        <div className="text-sm text-gray-500">
          <Snippet attribute="excerpt" hit={hit} tagName="mark" />
        </div>
      </div>
    </Link>
  )
}

export default function Search({ isOpen, onClose }) {
  const ref = createRef()
  const [query, setQuery] = useState(``)
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  )

  const indices = [
    { name: `GaoYouZhouZhi`, hitComp: `PageHit` },
  ]

  useEffect(() => {
    const input = document.getElementById('gaoyouzhi-search')
    input && input.focus()
  }, [isOpen])

  return (
    <div
      className={`${isOpen ? 'block' : 'hidden'} fixed inset-0 z-30 bg-hazy-25 bg-black-200 flex justify-center items-start`}
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full md:w-128 mt-0 md:mt-16 bg-white md:rounded-lg overflow-hidden shadow-lg"
        onClick={e => e.stopPropagation()}
        role="presentation"
      >
        <InstantSearch
          searchClient={searchClient}
          indexName={indices[0].name}
          onSearchStateChange={({ query }) => setQuery(query)}
          root={{ Root: <div></div>, props: { ref } }}
        >
          <div className="p-4 h-20 border-b">
            <Input />
          </div>
          <div className={`p-4 h-96 overflow-y-auto p-2 ${query.length > 0 ? 'block' : 'hidden'}`}>
            {indices.map(({ name, hitComp }) => (
              <Index
                key={name}
                indexName={name}
              >
                <div className="text-xs text-gray-500">
                  <Stats />
                </div>
                <Results>
                  <Hits hitComponent={PageHit()} />
                </Results>
              </Index>
            ))}
          </div>
        </InstantSearch>
      </div>
    </div>
  )
}