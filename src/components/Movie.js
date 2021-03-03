import React from 'react'
import PropTypes from 'prop-types'
import './Movie.css'

function showMovieTitle({ id, rating, runtime, summary, title, poster, genres }) {
    return (
        <div className="movie_data">
            <img src={poster}></img>
            <h1 className="movie__title">Title : {title}</h1>
            <h3 className="movie_summary">영화 줄거리 : {summary.slice(0, 100)}...</h3>
            <h4>평점 : {rating}</h4>
            <h5>런타임 : {runtime}</h5>
            <h5>영화 아이디 : {id}</h5>
            <h5>장르 :
                <ul>
                    {genres.map((genre, index) => (
                        <li key = {index}>{genre}</li>
                    ))}</ul>
            </h5>
        </div>
    )
}

showMovieTitle.propTypes = {
    // key: PropTypes.number.isRequired
    id: PropTypes.number.isRequired,
    // genres: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
    // sort: PropTypes.string.isRequired
}

export default showMovieTitle