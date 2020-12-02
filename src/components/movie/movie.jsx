import React from "react";

import PropTypes from 'prop-types';

import {format} from "date-fns";

import Spinner from "../spinner/index"

const Movie = ({name, description, image, date, id, loading}) => {

        if (loading) {
          return <Spinner />;
        }
        return <div className="movieContainer" id ={id}>
            <div className="imageContainer"><img alt="" src={image} /></div>
            <div className="description">
                <div><p className="movieName">{name}</p></div>
                <time className="movieDate" dateTime={date}>{format(new Date(date), "PP")}</time>
                <p className="movieStyles">Action</p>
                <p className="movieOverview">{description.length > 150 ? `${description.slice(0, 150)}...` : description}</p>
            </div>
        </div>
}
Movie.defaultProps = {
    name: () => {},
    description: () => {},
    image: () => {},
    date: () => {},
    id: 0,
    loading: true,
  }

  Movie.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    loading: PropTypes.bool,
  }


export default Movie;

