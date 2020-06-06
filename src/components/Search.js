import React, { useState, createRef, useEffect } from 'react'
import { Link } from 'gatsby'
import algoliasearch from 'algoliasearch/lite'
import {
  InstantSearch,
  Index,
  Hits,
  Highlight,
  Snippet,
  connectStateResults,
  connectSearchBox,
} from 'react-instantsearch-dom'
import logo from '../img/algolia.svg'

const Results = connectStateResults(
  ({ searchState: state, searchResults: res, children }) =>
    res && res.nbHits > 0 ? children : <div className="text-center">{`没有找到与 '${state.query}' 相关的记录`}</div>
)

const Stats = connectStateResults(
  ({ searchResults: res, isSearchStalled: loading }) => {
    if (loading) {
      return '搜索中..'
    } else {
      return res && res.nbHits > 0 && `${res.nbHits} 条记录`
    }
  }
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
      <div className="px-4 py-2 hover:bg-gray-200 cursor-pointer border-b border-gray-200">
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
    { name: `GaoYouZhouZhi` },
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
        className="relative w-full md:w-128 mt-0 md:mt-16 bg-white md:rounded-lg overflow-hidden shadow-lg"
        onClick={e => e.stopPropagation()}
        role="presentation"
      >
        <button
          className="absolute z-20 top-0 right-0 m-1 w-8 h-8 text-center cursor-pointer font-din text-lg text-gray-500"
          onClick={onClose}
        >
          &times;
        </button>
        <InstantSearch
          searchClient={searchClient}
          indexName={indices[0].name}
          onSearchStateChange={({ query }) => setQuery(query)}
          root={{ Root: <div></div>, props: { ref } }}
        >
          <div className="relative z-10 pt-10 p-4 border-b bg-gray-100 shadow-lg">
            <Input />
            <div className="mt-2 px-1 flex justify-between items-center">
              <div className="text-xs text-gray-500">
                <Results>{query.length ? <Stats /> : '^_^'}</Results>
              </div>
              <div>
                <img className="w-24" src={logo} alt="algolia" />
              </div>
            </div>
          </div>
          <div className={`h-96 overflow-y-auto ${query.length > 0 ? 'block' : 'hidden'}`}>
            {indices.map(({ name }) => (
              <Index
                key={name}
                indexName={name}
              >
                <Hits hitComponent={PageHit()} />
              </Index>
            ))}
          </div>
        </InstantSearch>
      </div>
    </div>
  )
}