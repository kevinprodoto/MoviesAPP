import React, {Component} from "react";

import PropTypes from 'prop-types';

import {Rate} from "antd"

import {format} from "date-fns";

import {GenresConsumer} from "../genresContext/index";

import img from "../../images/p110213185807873.png" 

export default class Movie extends Component {

  checkImage = (imagePath) => {
    if (imagePath === null) {
      return img;
    }
      return `https://image.tmdb.org/t/p/w200/${imagePath}?api_key=9ae97e145cfa535e840476b073e34378`

  }

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
        let data = date;
        if (!date) data = new Date();
        let Class = "movieRating";
        if (rating >= 3 && rating < 5) {
          Class += " colorOrange";
        } else if (rating >= 5 && rating < 7) {
          Class += " colorYellow";
        } else if (rating >= 7) {
          Class += " colorGreen";
        }

        return <div className="movieContainer" id ={id}>
            <div className="imageContainer"><img src={this.checkImage(image)} alt="Здесь могла быть ваша реклама" /></div>
            <div className="description">
                <div className="description__block">
                  <p className="movieName">{name}</p>
                  <span className={Class}>{rating}</span>
                </div>
                <time className="movieDate" dateTime={data}>{format(new Date(data), "PP")}</time>
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
                <p className="movieOverview">{description.length > 100 ? `${description.slice(0, 100)}...` : description}</p>
                <Rate onChange = {this.changeRating} count={10} className="Rate" />
            </div>
        </div>
      }
        
}
Movie.defaultProps = {
    name: () => {},
    description: () => {},
    image: () => {},
    date: "",
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


