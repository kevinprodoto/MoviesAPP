import React, {Component} from "react";

import PropTypes from 'prop-types';

export default class AppHeader extends Component {

    onLabelChange = (evv) => {
        const {updateMovies} = this.props;
        updateMovies(1, evv.target.value)
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
