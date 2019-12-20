import React from 'react';

const MovieList = (props) => {
    const movieList = props.data.map(movie => {
        return (
            <div className="movie-card">
                <div className="movie-card card">
                    <img className="movie-image" src={movie.imageUrl} alt="" />
                    <div className="card-body">
                        <h4 className="card-title">{movie.name}</h4>
                        <h6 className="movie-genre">{movie.genre}</h6>
                        <p className="text-justify" style={{ fontSize: '14px' }}>{props.movie.description}</p>
                    </div>
                    <div className="card-footer">
                        <div className="clearfix">
                            <div className="float-left mt-1">
                                <StarRating rating={movie.rating} />
                            </div>
                            <div className="card-footer-badge float-right badge badge-primary badge-pill">{props.movie.rating}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className='movie-list-wrapper'>
            {movieList}
        </div>
    )
}

export default MovieList;