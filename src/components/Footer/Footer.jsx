import React from 'react'

import PropTypes from 'prop-types'

import { Pagination } from 'antd'

const Footer = ({ movies, updateMovies, label, page, rated, changePage }) => {
    let paginClass = 'Footer__pagination'
    if (rated) {
        paginClass = 'invisible'
    }
    if (movies.length === 0) {
        paginClass = 'invisible'
    }

    const onChange = (pageNumber) => {
        changePage(pageNumber)
        updateMovies(pageNumber, label)
    }

    return (
        <div className="Footer">
            <Pagination className={paginClass} onChange={onChange} defaultCurrent={1} total={500} current={page} />
        </div>
    )
}
Footer.defaultProps = {
    label: '',
    updateMovies: () => {},
    page: 1,
    rated: false,
    movies: [],
    changePage: () => {},
}

Footer.propTypes = {
    label: PropTypes.string,
    updateMovies: PropTypes.func,
    page: PropTypes.number,
    rated: PropTypes.bool,
    movies: PropTypes.instanceOf(Array),
    changePage: PropTypes.func,
}
export default Footer
