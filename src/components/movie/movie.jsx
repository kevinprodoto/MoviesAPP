import React, {Component} from "react";

import PropTypes from 'prop-types';

import {Rate} from "antd"

import {format} from "date-fns";

import {GenresConsumer} from "../genresContext/index";

export default class Movie extends Component {
  changeRating = async (value) => {
    const {id, guestId} = this.props;
    await fetch(`https://api.themoviedb.org/3/movie/${id}/rating?api_key=9ae97e145cfa535e840476b073e34378&guest_session_id=${guestId}`, 
    {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        value,
      })
    })
  }

      render() {
        const {name, description, image, date, id, rating, style} = this.props;
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
                <GenresConsumer>
                  {
                    (genres) => {
                      return( 
                        <div className="movieStyles">
                          {style.map(item => <p key = {item}>{genres[item]}</p>)}
                        </div>
                      )
                    }
                  }
                </GenresConsumer>
                <p className="movieOverview">{description.length > 120 ? `${description.slice(0, 120)}...` : description}</p>
                <Rate onChange = {this.changeRating} count={10} className="Rate" />
            </div>
        </div>
      }
        
}
Movie.defaultProps = {
    name: () => {},
    description: () => {},
    image: () => {},
    date: "2020-12-12",
    id: 0,
    rating: 10,
    style: [],
    guestId: "",
  }

  Movie.propTypes = {
    guestId: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
    rating: PropTypes.number,
    style: PropTypes.instanceOf(Array),
  }


