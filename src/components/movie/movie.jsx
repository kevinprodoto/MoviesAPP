import React from "react";

import PropTypes from 'prop-types';

const Movie = ({name, description, image, date, id}) => {
        return <div className="movieContainer" id ={id}>
            <div className="imageContainer"><img alt="" src={image} /></div>
            <div className="description">
                <div><p className="movieName">{name}</p></div>
                <time className="movieDate" dateTime={date}>{date}</time>
                <p className="movieStyles"><p>Action</p></p>
                <p className="movieOverview">{description}</p>
            </div>
        </div>
}
Movie.defaultProps = {
    name: () => {},
    description: () => {},
    image: () => {},
    date: () => {},
    id: 0,
  }

  Movie.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
  }


export default Movie;

