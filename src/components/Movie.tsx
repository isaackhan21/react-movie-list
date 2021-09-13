import React from "react";

const IMG_URL = "https://image.tmdb.org/t/p/w500";

interface IProps {
  key: number;
  title: string;
  poster_path: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

const Movie: React.FC<IProps> = ({
  title,
  poster_path,
  vote_average,
  overview,
  release_date,
}) => {
  return (
    <div className="movie">
      <img className="poster" src={IMG_URL + poster_path} alt={title} />
      <div className="movie-title">
        <div className="title-div">
          <div className="title-date">
            <h1 className="title">{title}</h1>
            <h2 className="date">Release: {release_date}</h2>
          </div>
        </div>
        <div className="overview">
          <h2 className="summary">Summary</h2>
          <h3>{overview}</h3>
        </div>
      </div>
      <div className="movie-rating">
        <h2 className="rating">Average Rating: {vote_average}</h2>
      </div>
    </div>
  );
};

export default Movie;
