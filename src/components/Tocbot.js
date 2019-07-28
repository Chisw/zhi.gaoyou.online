import React from 'react'
import PropTypes from 'prop-types'
import tocbot from 'tocbot'

class TOC extends React.Component {
    componentDidMount() {
        tocbot.init({
            tocSelector: `.toc-list-container`,
            contentSelector: `.annals-body`,
            activeLinkClass: `active`,
            headingSelector: `h3, h4, h5, h6`,
            headingsOffset: parseInt(this.props.headingsOffset),
        })
    }

    render() {
        return (
            <nav className={`${this.props.className}` } data-cy="toc">
                {(
                    this.props.showHeading 
                        ? <h3 className="tocbot-title">{`${this.props.title} - 章节概览`}</h3> 
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