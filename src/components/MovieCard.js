import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const MovieCard = (props) => {
    const movie  = props.movie;
    console.log(movie._id);
   

    return(
        <div className="card-container">
            <img src="data:image/jpeg;base64,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" alt="" />
            <div className="desc">
                <h2>
                    <Link to={{
                        pathname: `/show-movie/${movie._id}`,
                        state: "Here is the ID"
                    }}>
                        { movie.title }
                    </Link>
                </h2>
                <h3>{movie.rating}</h3>
                <h3>{movie.director}</h3>
                <h3>{movie.actor}</h3>
                <p>{movie.description}</p>
            </div>
        </div>
    )
};

export default MovieCard;