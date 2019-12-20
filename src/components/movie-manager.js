import React, { Component } from 'react'
import StarRating from '../movie-manager/star.rating'

export default class MovieManager extends Component {
    constructor(props) {
        super(props)

        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch(`https://infinite-hamlet-24489.herokuapp.com/get/movies`)
            .then(res => res.json())
            .then(movies => {
                this.setState({
                    movies: movies
                })
            })
            .catch(error => {
                console.log('Error', error)
            })

    }


    render() {
        const movieList = this.state.movies.map(movie => {
            console.log(movie)
            return (
                    <div key={movie[0]} className="movie">
                        <div className="title">
                            <h2>{movie[1]}</h2>
                            <p>
                                {movie[3]}
                            </p>
                        </div>
                    </div>
            )
        })
        return (
            <div className=''>
                {movieList}
            </div>
        )
    }
}