import React, {Component} from "react";

import { debounce } from "lodash";

import PropTypes from 'prop-types';

export default class AppHeader extends Component {

    onLabelChange = (evv) => {
        const {updateMovies} = this.props;
        debounce(updateMovies(1, evv.target.value), 1000, {'maxWait': 1000})
    }

    render() {
        return (
            <div className="appHeader">
                <div className="buttons">
                    <button type = "button">Search</button>
                    <button type = "button">Rated</button>
                </div>
                <form>
                    <input onChange = {this.onLabelChange} 
                                      className="findMovie" 
                                      placeholder="Type to search..."></input>
                </form>
            </div>
        )  
    }
}
AppHeader.defaultProps = {
    updateMovies: () => {},
  }
  
  AppHeader.propTypes = {
    updateMovies: PropTypes.string,
  }
