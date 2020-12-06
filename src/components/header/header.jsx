import React, {Component} from "react";

import {debounce} from "lodash";

import PropTypes from 'prop-types';

export default class AppHeader extends Component {

    onLabelChange = (evv) => {
        const {updateMovies} = this.props;
        if (evv.target.value === "") {
            updateMovies(1, "return");
        } else {
            updateMovies(1, evv.target.value.replace(/ /gi, "+"));
        }
        
    }

    render() {
        return (
            <div className="appHeader">
                <div className="buttons">
                    <button type = "button">Search</button>
                    <button type = "button">Rated</button>
                </div>
                <form>
                    <input onChange = {debounce(this.onLabelChange, 2000, { 'maxWait': 2000 })} 
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
    updateMovies: PropTypes.func,
  }
