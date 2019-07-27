import React from 'react'
import PropTypes from 'prop-types'
import tocbot from 'tocbot'

class TOC extends React.Component {
    componentDidMount() {
        tocbot.init({
            tocSelector: `.toc-list-container`,
            contentSelector: `.annals-body`,
            headingSelector: `h3, h4`,
            headingsOffset: parseInt(this.props.headingsOffset),
        })
    }

    render() {
        return (
            <nav className={`${this.props.className}` } data-cy="toc">
                {(
                    this.props.showHeading 
                        ? <h3 className="f4 measure--0-2 middarkgrey ma0 mb2 pa0 fw4 nudge-bottom--2">篇内导航</h3> 
                        : null
                )}
                <div className={`toc-list-container`}></div>
            </nav>
        )
    }
}

TOC.defaultProps = {
    headingsOffset: `1`,
    showHeading: true,
}

TOC.propTypes = {
    headingsOffset: PropTypes.string,
    className: PropTypes.string,
    listClasses: PropTypes.string,
    showHeading: PropTypes.bool,
}

export default TOC