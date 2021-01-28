import React, { Component } from 'react'

import { debounce } from 'lodash'

import PropTypes from 'prop-types'

export default class Header extends Component {
    onLabelChange = (evv) => {
        const { updateMovies } = this.props
        if (evv.target.value === '') {
            updateMovies(1, 'return')
        } else {
            updateMovies(1, evv.target.value.replace(/ /gi, '+'))
        }
    }

    render() {
        const { ratedMovies, notRatedMovies, rated } = this.props
        let formClass = ''
        let searchActive = 'active'
        let ratedActive = ''
        if (rated) {
            formClass = 'invisible'
            searchActive = ''
            ratedActive = 'active'
        }
        if (!rated) {
            formClass = ''
            searchActive = 'active'
            ratedActive = ''
        }
        return (
            <div className="Header">
                <div className="Header__buttons">
                    <button
                        className={searchActive}
                        onClick={() => {
                            notRatedMovies()
                        }}
                        type="button"
                    >
                        Search
                    </button>
                    <button
                        className={ratedActive}
                        onClick={() => {
                            ratedMovies()
                        }}
                        type="button"
                    >
                        Rated
                    </button>
                </div>
                <form onSubmit={(evv) => evv.preventDefault()} className={formClass}>
                    <input
                        onChange={debounce(this.onLabelChange, 1000, { maxWait: 1000 })}
                        className="Header__findMovie"
                        placeholder="Type to search..."
                    ></input>
                </form>
            </div>
        )
    }
}
Header.defaultProps = {
    updateMovies: () => {},
    ratedMovies: () => {},
    notRatedMovies: () => {},
    rated: false,
}

Header.propTypes = {
    updateMovies: PropTypes.func,
    ratedMovies: PropTypes.func,
    notRatedMovies: PropTypes.func,
    rated: PropTypes.bool,
}
