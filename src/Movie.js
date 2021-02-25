import React from 'react'
import PropTypes from 'prop-types'

function showMovieTitle({ id, rating, runtime, summary, title, poster }) {
    return (
        <div>
            <img src = {poster}></img>
            <h4>{title}</h4>
            <h4>{summary}</h4>
            <h4>{rating}</h4>
            <h4>{runtime}</h4>
            <h4>{id}</h4>
        </div>
    )
}

showMovieTitle.propTypes = {
    // key: PropTypes.number.isRequired
    id:PropTypes.number.isRequired,
    // genres: PropTypes.array.isRequired,
    rating: PropTypes.number.isRequired,
    runtime: PropTypes.number.isRequired,
    summary: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    // sort: PropTypes.string.isRequired
}

export default showMovieTitle