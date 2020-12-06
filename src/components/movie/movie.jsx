import React from "react";

import PropTypes from 'prop-types';

import {Rate} from "antd"

import {format} from "date-fns";

const Movie = ({name, description, image, date, id, rating}) => {

        let Class = "movieRating";
        if (rating >= 3 && rating < 5) {
          Class += " colorOrange";
        } else if (rating >= 5 && rating < 7) {
          Class += " colorYellow";
        } else if (rating >= 7) {
          Class += " colorGreen";
        }

        return <div className="movieContainer" id ={id}>
            <div className="imageContainer"><img alt="" src={image} /></div>
            <div className="description">
                <div className="description__block">
                  <p className="movieName">{name}</p>
                  <span className={Class}>{rating}</span>
                </div>
                <time className="movieDate" dateTime={date}>{format(new Date(date), "PP")}</time>
                <p className="movieStyles">Action</p>
                <p className="movieOverview">{description.length > 120 ? `${description.slice(0, 120)}...` : description}</p>
                <Rate count={10} className="Rate" />
            </div>
        </div>
}
Movie.defaultProps = {
    name: () => {},
    description: () => {},
    image: () => {},
    date: () => {},
    id: 0,
    rating: 10,
  }

  Movie.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    rating: PropTypes.number,
  }


export default Movie;

