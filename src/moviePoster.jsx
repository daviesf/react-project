import { React } from "react";
import './moviePoster.css';

const MoviePoster = (props) => {
    const { title, imageUrl } = props;

    return (
        <div className="movie-poster">
            <h2>{title}</h2>
            <img src={imageUrl} alt={title}/>
        </div>

    );
};

export default MoviePoster;